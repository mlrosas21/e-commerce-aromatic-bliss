const truncateText = (text) =>  text?.length > 100 ? `${text.substring(0,97)}...` : text

export const utilsService = { truncateText };