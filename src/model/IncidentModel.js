


class IncidentsModel {
	
	constructor() {
		this.incidents = [];
		this.counter=0;
	}
    

	create(data) {
		
		const newIncident = {
			id: ++this.counter,
			createdOn: new Date().toJSON() || "",
			createdBy: data.createdBy || 0,
			type: data.type || "",
			location: data.location || "",
			status: data.status || "",
			Images: data.images || [],
			Videos: data.videos || [],
			comment: data.comment || ""
		};
		this.incidents.push(newIncident);
		return newIncident;
	}
	
	getOne(id) {
		return this.incidents.find(record => record.id === id);
	}
	
	getAll() {
		return this.incidents;
	}
	
	update(id, data) {
		const incident = this.findOne(id);
		const index = this.incidents.indexOf(incident);
		this.incidents[index].location = data["location"] || this.incident.location;
		this.incidents[index].comment = data["comment"] || this.incident.comment;
		return this.incidents[index];
	}
	
	delete(id) {
		const incident = this.findOne(id);
		const index = this.incidents.indexOf(incident);
		this.incidents.splice(index, 1);
		return {};
	}
	 
}
export default new IncidentsModel();
