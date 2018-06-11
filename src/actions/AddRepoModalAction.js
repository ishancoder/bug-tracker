export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const MODAL_DATA_CHANGE = "MODAL_DATA_CHANGE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
};

export const toggleEditing = (editing) => {
    return {
        type: TOGGLE_EDITING,
        payload: editing
    }
};

export const modalDataChange = (data) => {
    return {
        type: MODAL_DATA_CHANGE,
        payload: data
    }
};