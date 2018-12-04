const moment = require('moment')
const { Appointment, User } = require('../models')

class ScheduleController {
  async index (req, res) {
    const provider = await User.findById(req.params.provider)

    Appointment.belongsTo(User, { foreignKey: 'user_id' })

    const appointments = await Appointment.findAll({
      include: ['User'],
      where: {
        provider_id: req.params.provider
      }
    })

    const scheduling = appointments.map(a => {
      const value = moment
        .tz(a.date, 'America/Manaus')
        .format('DD/MM/YYYY kk:mm')

      const user = a.user_id

      const name = a.User.name
      const nameBarber = provider.name

      // Informações de Estudo
      // const momentDate = moment(a.date)
      // const hour = momentDate.hours()
      // const minutes = momentDate.minutes()
      // const seconds = momentDate.seconds()
      // console.log('value:', value, user)

      return {
        value: value,
        user: user,
        name: name,
        nameBarber: nameBarber
      }
    })

    const data = {
      scheduling,
      nameBarber: provider.name
    }

    return res.render('scheduling/index', data)
  }
}

module.exports = new ScheduleController()
