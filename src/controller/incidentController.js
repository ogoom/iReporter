const IncidentsModel = require("../model/IncidentModel");
exports.createRecord = function(req, res) {
	if (!req.body.createdBy && !req.body.type) {
		// eslint-disable-next-line no-console
		console.log(req.body);
		return res.status(400).send({"message": "Please fill all the required fields "});
	}
	// eslint-disable-next-line no-console
	console.log(req.body);
	const incident = IncidentsModel.create;
	return res.status(201).json({status: "success", message: "User added successfully!!!", data: incident});
};

//res.json({status: "success", message: "User added successfully!!!", data: null});

exports.getAll = function(req, res) {
	const incidents = IncidentsModel.findAll;
	return res.status(200).json({status: "success", message: "Record added successfully!!!", data: incidents});
};

exports.getOne = function(req, res) {
	const incident = IncidentsModel.findOne(req.params.id);
	if (!incident) {
		return res.status(404).send({"message": "Report not found3"});
	}
	return res.status(200).send(incident);
};

exports.updateLocation = function(req, res) {
	const incident = IncidentsModel.findOne(req.params.id);
	if (!incident) {
		return res.status(404).send({"message": "Report not found2"});
	}
	const updateRecord = IncidentsModel.update(req.params.id, req.body);
	return res.status(200).send(updateRecord);
};

exports.comment = function(req, res) {
	const incident = IncidentsModel.findOne(req.params.id);
	if (!incident) {
		return res.status(404).send({"message": "Report not found1"});
	}
	const updateComment = IncidentsModel.update(req.params.id, req.body);
	return res.status(200).send(updateComment);
};

exports.delete = function(req, res) {
	const incident = IncidentsModel.findOne(req.params.id);
	if (!incident) {
		return res.status(404).send({"message": "Report not found"});
	}
	const ref = IncidentsModel.delete(req.params.id);
	return res.status(204).send(ref);
};