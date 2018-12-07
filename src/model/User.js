import uuid from "uuid";


class UserModel {
	constructor() {
		this.users = [];
	}
	create(data) {
		const newUser = {
			id: uuid.v4(),
			firstname: data.firstName || "",
			lastname: data.lastName || "",
			othernames: data.othernames || "",
			email: data.email || "",
			phoneNumber: data.phoneNumber || "",
			username: data.username || "",
			registered: data.registered || new Date(),
			isAdmin: data.isAdmin || false
		};
		this.incidents.push(newUser);
		return new newUser;
	}
}
export default new UserModel;