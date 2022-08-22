import axios from "axios";

const SERVER_URL="http://localhost:9000";

//@desc get all contacts
//@Route GET http://localhost:9000/contacs  
export const getAllContacts=()=>{
    const url=`${SERVER_URL}/contacts`;
    return axios.get(url);
}

//@desc get contact with Id
//@Route GET http://localhost:9000/:contacId  
export const getContact=(contactId)=>{
    const url=`${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url);
}

//@desc get all groups
//@Route GET http://localhost:9000/groups
export const getAllGroups=()=>{
    const url=`${SERVER_URL}/groups`;
    return axios.get(url);
}

//@desc get group with Id
//@Route GET http://localhost:9000/:groupsId  
export const getGroup=(groupId)=>{
    const url=`${SERVER_URL}/groups/${groupId}`;
    return axios.get(url);
}

//@desc create contact 
//@Route GET http://localhost:9000/contacts
export const createContact=(contact)=>{
    const url=`${SERVER_URL}/contacts`;
    return axios.post(url,contact);
}

//@desc Update contact 
//@Route GET http://localhost:9000/contacts/:contactId
export const updateContact=(contact,contactId)=>{
    const url=`${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url,contact);
}

//@desc Delete contact 
//@Route GET http://localhost:9000/contacts/:contactId
export const deleteContact=(contactId)=>{
    const url=`${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url);
}


