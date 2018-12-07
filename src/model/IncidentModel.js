


class IncidentsModel {
	
	constructor() {
		this.incidents = [];
		this.i=0;
	}
    

	create(data) {
		
		const newIncident = {
			id: ++this.i,
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
	
	findOne(id) {
		return this.incidents.find(record => record.id === id);
	}
	
	findAll() {
		return this.incidents;
	}
	
	update(id, data) {
		const incident = this.findOne(id);
		const index = this.incidents.indexOf(incident);
		this.incidents[index].location = data["location"] || this.incident.location;
		this.incidents[index].comment = data["comment"] || this.incident.comment;
		return this.reflections[index];
	}
	
	delete(id) {
		const incident = this.findOne(id);
		const index = this.incidents.indexOf(incident);
		this.incidents.splice(index, 1);
		return {};
	}
	id ()  {
		var i = 0;
		return function() {
			return i++;
		};
	} 
}
export default new IncidentsModel();
