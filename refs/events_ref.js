const EventEmitter = require('events')
const os =require('os')
class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${os.homedir()}`)
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log(data)
})


logger.log('Start directory:')
logger.log('Finish derictory:')
