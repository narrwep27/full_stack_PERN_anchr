const { Session, Tag, sequelize } = require('../models');

const GetAllSessions = async (req, res) => {
	try {
		const sessions = await Session.findAll();
		res.send(sessions);
	} catch (error) {
		throw error;
	}
};

const GetSessionByID = async (req, res) => {
	try {
		let id = parseInt(req.params.session_id);
		const session = await Session.findByPk(id);
		res.send(session);
	} catch (error) {
		throw error;
	}
};

const GetSessionByUserId = async (req, res) => {
  try {
    const sessions = await Session.findAll({
      where: { user_id: req.params.user_id },
      include: Tag,
      order: [['createdAt', 'DESC']]
    });
    res.send(sessions);
  } catch (error) {
    throw error;
  }
};

const TotalAmounts = async (req, res) => {
	try {
		const sessions = await sequelize.query(
			`SELECT description, SUM(sessions."timeSpent") AS "Total_Time" FROM sessions INNER JOIN tags ON (sessions.tag_id = tags.id) WHERE sessions."user_id" = ${req.params.id} GROUP BY description;`
		);
		res.send(sessions[0]);
	} catch (error) {
		throw error;
	}
};

const CreateSession = async (req, res) => {
	try {
		let session = await Session.create(req.body);
		res.send(session);
	} catch (error) {
		console.log(req.body);
		throw error;
	}
};

const UpdateSession = async (req, res) => {
	try {
		let id = parseInt(req.params.session_id);
		let sessionUpdate = await Session.update(req.body, {
			where: { id: id },
			returning: true,
		});
		res.send(sessionUpdate);
	} catch (error) {
		throw error;
	}
};

const DeleteSession = async (req, res) => {
	try {
		let id = parseInt(req.params.session_id);
		await Session.destroy({ where: { id: id } });
		res.send({ message: `Session ID ${id} has been deleted.` });
	} catch (error) {
		throw error;
	}
};

module.exports = {
	CreateSession,
	GetAllSessions,
	GetSessionByID,
	GetSessionByUserId,
	UpdateSession,
	DeleteSession,
	TotalAmounts,
};
