/**
 * This is for Contain function layer for contractor controller.
 * @author Manthan Vaghasiya
 *
 */

const ObjectId = require('mongodb').ObjectID;
import { successAction, failAction } from '../../utilities/response';
import Message from '../../utilities/messages';
import { addContractor, getcontractor, getcontractorwithid, deletecontractor, updatecontractor } from '../../services/contractor/contractor';

/*************************** addContractors ***************************/
export const addContractors = async (req, res) => {
    try {
        const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
        const createdBy = req.user ? ObjectId(req.user._id) : undefined;
        const data = await addContractor(req,mainUserId, createdBy);
        res.status(200).json(successAction(data, Message.success));
    } catch (error) {
        res.status(400).json(failAction(error.message));
    }
};

/*************************** getcontractor ***************************/
export const getcontractors = async (req, res) => {
    try {
        const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
        const createdBy = req.user ? ObjectId(req.user._id) : undefined;
        const data = await getcontractor(req, mainUserId, createdBy);
        res.status(200).json(successAction(data, Message.success));
    } catch (error) {
        res.status(400).json(failAction(error.message));
    }
};

/*************************** getcontractorwithid ***************************/
export const getcontractorwithids = async (req, res) => {
    try {
        const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
        const createdBy = req.user ? ObjectId(req.user._id) : undefined;
        const data = await getcontractorwithid(req, mainUserId, createdBy);
        res.status(200).json(successAction(data, Message.success));
    } catch (error) {
        res.status(400).json(failAction(error.message));
    }
};

/*************************** deletecontractor ***************************/
export const deletecontractors = async (req, res) => {
    try {
        const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
        const createdBy = req.user ? ObjectId(req.user._id) : undefined;
        const data = await deletecontractor(req, mainUserId, createdBy);
        res.status(200).json(successAction(data, Message.success));
    } catch (error) {
        res.status(400).json(failAction(error.message));
    }
};

/*************************** updatecontractor ***************************/
export const updatecontractors = async (req, res) => {
    try {
        const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
        const createdBy = req.user ? ObjectId(req.user._id) : undefined;
        const data = await updatecontractor(req, mainUserId, createdBy);
        res.status(200).json(successAction(data, Message.success));
    } catch (error) {
        res.status(400).json(failAction(error.message));
    }
};

