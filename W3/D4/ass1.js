let tickets = [
    {id:101, priority:"high",resolved:true},
    {id:102, priority:"medium",resolved:false},
    {id:103, priority:"low",resolved:true},
    {id:104, priority:"high",resolved:false},
    {id:105, priority:"medium",resolved:true},
    {id:106, priority:"low",resolved:false}
    
]
tickets.unshift({id:100, priority:"high",resolved:true});



tickets.push({id:107, priority:"medium",resolved:true},
    {id:108, priority:"low",resolved:false}
    );
    

let currentTicket = tickets.shift();
console.log("This is current ticket in process :-",currentTicket ,"\n");

let droppedTicket = tickets.pop();
console.log("this ticket is dropped :- ",droppedTicket ,"\n");

let unresolvedTickets = tickets.filter (unResolved => unResolved.resolved === false);
console.log("This are unresolved tickets :-",unresolvedTickets ,"\n");

let ids = unresolvedTickets.map (tickets => tickets.id);
console.log("this are ticket id's which are unresolved :-",ids, "\n");

