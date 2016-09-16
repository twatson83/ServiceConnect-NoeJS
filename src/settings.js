import client from './Clients/rabbitMQ';

let settings = {
    amqpSettings: {
        queue: {
            name: null,
            durable: true,
            exclusive: false,
            autoDelete: false,
            noAck: false
        },
        ssl: {
            enabled: false,
            key: null,
            passphrase: null,
            cert: null,
            ca: [],
            pfx: null,
            fail_if_no_peer_cert: false,
            verify: 'verify_peer'
        },
        host: "amqp://localhost" ,
        retryDelay: 3000,
        maxRetries: 3,
        errorQueue: "errors",
        auditQueue: "audit",
        auditEnabled: false
    },
    events: {
        error: e => console.error(e),
        connected: () => console.info("Bus connected")
    },
    handlers: {
        // "message type": [ array of callbacks ]
    },
    client: client // AMQP client
};

export default settings;