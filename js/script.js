function getEquipmentInfo(EquipmentID) {
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye7.herokuapp.com/api/equipments/' + EquipmentID + '/',
        success: function (data) {
            // location.reload();
            equipment = data;

            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return equipment;
}

function getCaseInfo(CaseID) {
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye7.herokuapp.com/api/cases/' + CaseID + '/',
        success: function (data) {
            // location.reload();
            case1 = data;

            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return case1;
}

function getInvestigatorInfo(InvestigatorID) {
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye7.herokuapp.com/api/investigators/' + InvestigatorID + '/',
        success: function (data) {
            // location.reload();
            investigator = data
            // console.log(data);
            $("#investigator_ID").text(investigator.InvestigatorID);
            $("#investigator_first_name").text(investigator.FirstName);
            $("#investigator_last_name").text(investigator.LastName);
            $("#Investigator_hourly_rate").text(investigator.HourlyRate);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return investigator;
}

function getAvailableCase(Investigator) {
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye7.herokuapp.com/api/assignments/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                ass = data[i];
                if (ass.Investigator != Investigator) {
                    cases.push(ass.Case);

                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}

function getUnavailableCase(Investigator) {
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye7.herokuapp.com/api/assignments/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                ass = data[i];
                if (ass.Investigator == Investigator) {
                    cases.push(ass.Case);

                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}
function getAssignment(Instigator, Case) {
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye7.herokuapp.com/api/assignments/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                ass = data[i];
                if (ass.Investigator == Instigator && ass.Case == Case) {
                    assid = ass.id
                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return assid;
}

function getAssignedCase(Instigator) {
    cases = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye7.herokuapp.com/api/assignments/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                ass = data[i];
                if (ass.Investigator == Instigator) {
                    cases.push(ass.Case);
                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}

function getClosedCase() {
    //return closed cases
    cases = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye7.herokuapp.com/api/cases/',
        success: function (data) {
            // location.reload();

            i = 0;
            while (i < data.length) {
                case1 = data[i];
                if (case1.Status == "Closed") {
                    cases.push(case1);
                }
                i++;
            }

            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}

function getOpenCase() {
    //return closed cases
    cases = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye7.herokuapp.com/api/cases/',
        success: function (data) {
            // location.reload();

            i = 0;
            while (i < data.length) {
                case1 = data[i];
                if (case1.Status == "Open") {
                    cases.push(case1);
                }
                i++;
            }

            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}

function getAllCase() {
    //return closed cases
    cases = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye7.herokuapp.com/api/cases/',
        success: function (data) {
            // location.reload();

            i = 0;
            while (i < data.length) {
                case1 = data[i];

                cases.push(case1);
                i++;
            }

            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return cases;
}

function getClientInfo(ClientID) {
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://bigeye7.herokuapp.com/api/clients/' + ClientID + '/',
        success: function (data) {
            // location.reload();
            client = data;


            // console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
    return client;
}

function getClients() {
    clients = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://balham-college-db.herokuapp.com/Student/',
        success: function (data) {
            // location.reload();

            i = 0;
            while (i < data.length) {
                student = data[i];

                clients.push(client);


                i = i + 1;
            }
        },


        error: function (err) {
            console.log(err);
        }
    });
    return clients;
}

function getAllocations(caseID) {
    allocations = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://bigeye7.herokuapp.com/api/allocations/',
        async: false,
        success: function (data) {
            i = 0;
            while (i < data.length) {
                allocations = data[i];
                if (allocations.Case == CaseID) {
                    allocations.push(allocations);
                }
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return allocations;

}
