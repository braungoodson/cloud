module.exports = {
	connectionString:null,
	mongoose:null,
	schemas:null,
	models:null,
	init : function (connectionString,mongoose,schemas,models) {
		this.connectionString = connectionString; //"mongodb://127.0.0.1:27017/microMrp";
		this.mongoose = mongoose; //require('../node_modules/mongoose');
		this.mongoose.connect(connectionString);
		this.schemas = schemas; //this.schemaModels = require('../schemaModels/microMrpSchemaModels');
		this.schemas.init(this.mongoose);
		this.models = models;
		this.models.init(this.mongoose);
	}
}
