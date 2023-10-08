/// To restrict the value
/// Eg: status of an acion - Pending, Active, Inactive

/* enum Status{
    PENDING,
    ACTIVE,
    INACTIVE
} */
/* enum Status{
    PENDING = 10,
    ACTIVE,
    INACTIVE,
}z */
/// -- Start with 10 and 11, 12

/* enum Status{
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
} */


enum Status{
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
const ticketStatus = Status.ACTIVE;

/*
The above TS will generate JS code as :

"use strict";
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
})(Status || (Status = {}));
const ticketStatus = Status.ACTIVE;


*/


const enum Status1{
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
const ticketStatus1 = Status1.ACTIVE;