/*import IncidentsModel from "../model/IncidentModel";

const Incident = {
  
	create(req, res) {
		if (!req.body.createdBy && !req.body.type) {
			// eslint-disable-next-line no-console
			console.log(req.body);
			return res.status(400).send({"message": "Please fill all the required fields "});
		}
		const incident = IncidentsModel.create(req.body);
		return res.status(201).send(incident);
	},
	
	getAll(req, res) {
		const incidents = IncidentsModel.findAll();
		return res.status(200).send(incidents);
	},
	
	getOne(req, res) {
		const incident = IncidentsModel.findOne(req.params.id);
		if (!incident) {
			return res.status(404).send({"message": "Report not found3"});
		}
		return res.status(200).send(incident);
	},
	
	updateLocation(req, res) {
		const incident = IncidentsModel.findOne(req.params.id);
		if (!incident) {
			return res.status(404).send({"message": "Report not found2"});
		}
		const updateRecord = IncidentsModel.update(req.params.id, req.body);
		return res.status(200).send(updateRecord);
	},
	comment(req, res) {
		const incident = IncidentsModel.findOne(req.params.id);
		if (!incident) {
			return res.status(404).send({"message": "Report not found1"});
		}
		const updateComment = IncidentsModel.update(req.params.id, req.body);
		return res.status(200).send(updateComment);
	},
	
	delete(req, res) {
		const incident = IncidentsModel.findOne(req.params.id);
		if (!incident) {
			return res.status(404).send({"message": "Report not found"});
		}
		const ref = IncidentsModel.delete(req.params.id);
		return res.status(204).send(ref);
	}
};


export default Incident;*/