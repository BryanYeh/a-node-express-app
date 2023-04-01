const winston = require('winston')
const { format } = winston
const { combine, timestamp, printf, splat } = format
require('winston-daily-rotate-file')

const dailyTransport = new winston.transports.DailyRotateFile({
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '1g',
    format: combine(
        timestamp(),
        splat(),
        printf((info) => {
            return `[${info.timestamp}] ${info.level}: ${info.message}`
        })
    ),
    level: 'info',
    dirname: 'storage/logs',
    maxFiles: '10d',
})

const logger = winston.createLogger({
    transports: [dailyTransport],
})

module.exports = logger
