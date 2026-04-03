// basics of RBAC
const routePermisions = {
    "/admin":["admin"],
    "/reports":["admin","manager"],
    "/profile":["admin","manager","user"]
};

function canAcess(route, role){
   
    return allowedRoles.includes(role);
}
console.log("user acess to /admin:",
    canAcess("/admin","user")
);
console.log("user acess to /admin:",
    canAcess("/admin","admin")
);
console.log("user acess to /reports:",
    canAcess("/reports","manager")
);
console.log("user acess to /profile:",
    canAcess("/profile","user")
);

