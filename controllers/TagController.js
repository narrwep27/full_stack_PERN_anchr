const { Tag } = require('../models');

const GetAllTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.send(tags);
  } catch (error) {
    throw error;
  }
};

const GetTagByID = async (req, res) => {
  try {
    let id = parsInt(req.params.tag_id);
    const tag = await Tag.findByPK(id);
    res.send(tag);
  } catch (error) {
    throw error;
  }
};

const CreateTag = async (req, res) => {
  try {
    let tag = await Tag.create(req);
    res.send(tag);
  } catch (error) {
    throw error;
  }
};

const UpdateTag = async (req, res) => {
  try {
    let id = parseInt(req.params.tag_id);
    let tagUpdate = await Tag.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(tagUpdate);
  } catch (error) {
    throw error;
  }
};

const DeleteTag = async (req, res) => {
  try {
    let id = parseInt(req.params.tag_id);
    await Tag.destroy({ where: { id: id } });
    res.send({ message: `Tag ID ${id} has been deleted.` });
  } catch (error) {
    throw error;
  }
};

module.export = {
  CreateTag,
  GetAllTags,
  GetTagByID,
  UpdateTag,
  DeleteTag
};
