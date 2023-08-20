const days_name = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
]

const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

export default () => {
    const currentDate = new Date

    const today = {
        day_name: days_name[currentDate.getDay()],
        day_number: currentDate.getDate(),
        month: months[currentDate.getMonth()]
    }
    
    return today
}