const storageUtil = sessionStorage;

const fetchFromStorage = (key) => JSON.parse(storageUtil.getItem(key));

const storeIntoStorage = (key, val) => storageUtil.setItem(key, JSON.stringify(val));

const exportObj = {
    fetchFromStorage,
    storeIntoStorage
};

export default exportObj;
