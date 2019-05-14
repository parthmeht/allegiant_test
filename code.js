const remainingEmployeesArray = ["Jim Halpert", "Pam Beezley", "Kevin Malone", "Dwight Schrute", "Andy Bernard",
    "Angela Martin", "Erin Hannon", "Toby Flenderson", "Stanley Hudson", "Jan Levinson", "Creed Bratton",
    "Ryan Howard", "Darryl Philbin", "Holly Flax", "Meredith Palmer", "Kelly Kapoor", "Gabe Lewis",
    "Robert California", "Phyllis Vance", "Roy Anderson", "Peter Miller", "Clark Green"];
let firstNamesArray = [];
let lastNamesArray = [];
let departmentsCount = {
    Accounting: 0,
    Sales: 0,
    Reception: 0,
    Support: 0,
    TempsAndInterns: 0,
    Warehouse: 0
};
const employeesArray = [
    { name: "Oscar Martinez", department: "Accounting" },
    { name: "Michael Scott", department: "Sales" },
    { name: "Jim Halpert", department: "Sales" },
    { name: "Pam Beezley", department: "Reception" },
    { name: "Kevin Malone", department: "Accounting" },
    { name: "Dwight Schrute", department: "Sales" },
    { name: "Andy Bernard", department: "Sales" },
    { name: "Angela Martin", department: "Accounting" },
    { name: "Erin Hannon", department: "Reception" },
    { name: "Toby Flenderson", department: "Human Resources" },
    { name: "Stanley Hudson", department: "Sales" },
    { name: "Jan Levinson", department: "Corporate" },
    { name: "Creed Bratton", department: "Support" },
    { name: "Ryan Howard", department: "Temps and Interns" },
    { name: "Darryl Philbin", department: "Warehouse" },
    { name: "Holly Flax", department: "Human Resources" },
    { name: "Meredith Palmer", department: "Support" },
    { name: "Kelly Kapoor", department: "Support" },
    { name: "Gabe Lewis", department: "Human Resources" },
    { name: "Robert California", department: "Corporate" },
    { name: "Phyllis Vance", department: "Sales" },
    { name: "Roy Anderson", department: "Warehouse" },
    { name: "Peter Miller", department: "Temps and Interns" },
    { name: "Clark Green", department: "Support" }
];

function processAllEmployees(allEmployees) {
    /**
       TODO #3
      loop through all of the employees and add their names to the firstNamesArray and lastNames array unless they are part of corporate or HR because according to Michael "Toby is in HR, which technically means he works for corporate, so he's not really a part of our family."
      **/
    if (allEmployees != null && allEmployees.length > 0) {
        for (let index = 0; index < allEmployees.length; index++) {
            const element = allEmployees[index];
            if (element.department != "Human Resources" && element.department != "Corporate") {
                splitFullName(element.name);
                incrementDepartmentCount(element.department)
            }
        }
    }
}
function splitFullName(fullName) {
    if (fullName != undefined && fullName != null) {
        var res = fullName.split(" ");
        firstNamesArray.push(res[0]);
        lastNamesArray.push(res[1]);
    }
}
function incrementDepartmentCount(department) {
    switch (department) {
        case "Accounting": departmentsCount.Accounting += 1;
            break;
        case "Sales": departmentsCount.Sales += 1;
            break;
        case "Reception": departmentsCount.Reception += 1;
            break;
        case "Support": departmentsCount.Support += 1;
            break;
        case "Temps and Interns": departmentsCount.TempsAndInterns += 1;
            break;
        case "Warehouse": departmentsCount.Warehouse += 1;
            break;
        default: text = "No value found";
    }
}
function printOutFirstNames() {
    processAllEmployees(employeesArray);
    //console.log(firstNamesArray.toString()); To print all elements in a line
    console.log("First Names of Employees are as follows :- ")
    firstNamesArray.forEach(element => {
        console.log(element);
    });

}

printOutFirstNames();
