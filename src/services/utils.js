const truncateText = (text) =>  text?.length > 175 ? `${text.substring(0,173)}...` : text

export const utilsService = { truncateText };