import jwt_decode from "jwt-decode";

function createUserFromJson(json, email) {
  return {
    firstName: json.profile.firstName,
    lastName: json.profile.lastName,
    email: email,
    token: json.token,
    role: getRoleFromToken(json.token),
    id: json.profile["_id"],
    userId: json.profile["_userId"],
    profilePicture: json.profile.profilePicture,
  };
}

function getRoleFromToken(token) {
  const decodedToken = jwt_decode(token);
  return decodedToken.role;
}

export default createUserFromJson;
