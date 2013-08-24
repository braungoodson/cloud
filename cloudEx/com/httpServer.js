module.exports = {
	port: null,
	express: null,
	app: null,
	dbConnector: null,
	restApi: null,
	serverShell: null,
	init: function (port,express,app,dbConnector,restApi,serverShell) {
		this.port = port;
		this.express = express: //require('../node_modules/express');
		this.app = this.express();
		this.app.use(this.express.bodyParser());
		this.app.listen(this.port);
		this.dbConnector = dbConnector;
		this.dbConnector.init(
			"mongodb://127.0.0.1:27017/cloudEx",
			require('../node_modules/mongoose'),
			require('./schemas'),
			require('./models')
		);
		this.restApi = restApi; //require('./restApi');
		this.restApi.init(this.dbConnector,this.app);
		this.serverShell = serverShell; //require('./serverShell');
		this.serverShell.init(this.dbConnector);
	}
}
