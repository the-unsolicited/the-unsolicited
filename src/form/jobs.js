const jobs = {
  "kia": {
    id: "kia",
    display: "KILLED IN ACTION",
    lines: [
      {
        id: "name",
        display: "",
        values: [],
      },
      {
        id: "rank",
        display: "Rank: ",
        values: [
          { form: "PVT", term: "Private", chance: "100" },
          { form: "PFC", term: "Private 1st Class", chance: "80" },
          { form: "SPC", term: "Specialist", chance: "20" },
          { form: "CPL", term: "Corporal", chance: "20" },
          { form: "SGT", term: "Sergeant", chance: "20" },
          { form: "SSG", term: "Staff Sergeant", chance: "10" },
          { form: "SFC", term: "Sergeant 1st Class", chance: "10" },
          { form: "MSG", term: "Master Sergeant", chance: "10" },
          { form: "1SG", term: "First Sergeant", chance: "5" },
          { form: "SGM", term: "Sergeant Major", chance: "5" },
          { form: "WO1", term: "Warrant Officer", chance: "5" },
          { form: "2LT", term: "Second Lieutenant", chance: "5" },
          { form: "1LT", term: "First Lieutenant", chance: "5" },
          { form: "CPT", term: "Captain", chance: "5" },
          { form: "MAJ", term: "Major", chance: "5" },
          { form: "LTC", term: "Lieutenant Colonel", chance: "5" },
        ],
      },
      {
        id: "place",
        display: "Place: ",
        values: [
          { both: "Sharp's Peak" },
          { both: "Orange Valley" },
          { both: "Crater of Alangra" },
          { both: "Gentle Basin" },
          { both: "East Outer Ward" },
          { both: "Sepenen Heights" },
          { both: "Vorinda Ground" },
          { both: "Colinia Outpost" },
          { both: "Wide Low" },
          { both: "Prochiton" },
          { both: "Prosper Ridge" },
          { both: "Outer Enerestiv" },
        ],
      },
      {
        id: "date",
        future: true,
        display: "Date: ",
        values: [],
      },
      {
        id: "cause",
        display: "Cause: ",
        values: [
          { both: "Unknown" },
          { both: "Friendly Fire" },
          { both: "Enemy Fire" },
          { both: "IED(Improvised Explosive)" },
          { both: "Accident" },
          { both: "Starvation" },
          { both: "Illness" },
          { both: "Heart Failure" },
          { both: "Liver Failure" },
          { both: "Self Inflicted" },
        ],
      },
    ],
  },
  "credit": {
    id: "credit",
    display: "CREDIT OFFER",
    lines: [
      {
        id: "name",
        display: "",
        values: [],
      },
      {
        id: "percent",
        display: "Initial APR: ", // 연이율, annual percentage rate
        values: [
          { both: "0%" },
          { both: "0.1%" },
          { both: "0.2%" },
          { both: "0.3%" },
          { both: "0.4%" },
          { both: "0.5%" },
        ],
      },
      {
        id: "percent2",
        display: "APR: ",
        values: [
          { both: "5%" },
          { both: "6%" },
          { both: "7%" },
          { both: "8%" },
          { both: "9%" },
          { both: "10%" },
        ],
      },
      {
        id: "cashback",
        display: "Cash Back: ",
        values: [
          { both: "0.1%" },
          { both: "0.25%" },
          { both: "0.5%" },
          { both: "0.75%" },
          { both: "1%" },
          { both: "1.25%" },
          { both: "1.5%" },
        ],
      },
      {
        id: "phone",
        display: "Phone: ",
        values: [
          { both: "1-800-562-599" },
          { both: "1-800-417-864" },
          { both: "1-800-330-571" },
          { both: "1-800-222-528" },
          { both: "1-800-849-983" },
          { both: "1-800-271-667" },
          { both: "1-800-826-252" },
          { both: "1-800-526-698" },
          { both: "1-800-272-883" },
          { both: "1-800-570-437" },
        ],
      },
    ],
  },
  "sweeps": {
    id: "sweeps",
    display: "SWEEPSTAKES",
    lines: [
      {
        id: "name",
        display: "",
        values: [],
      },
      {
        id: "reward",
        display: "Reward: ",
        values: [
          { term: "$100", form: "$100! $100! $100! $100!" },
          { term: "$500", form: "$500! $500! $500! $500!" },
          { term: "$1,000", form: "$1,000! $1,000! $1,000!" },
          { term: "$5,000", form: "$5,000! $5,000! $5,000!" },
          { term: "$7,500", form: "$7,500! $7,500! $7,500!" },
        ],
      },
      {
        id: "phone",
        display: "Call: ",
        values: [
          { both: "1-800-972-244" },
          { both: "1-800-759-676" },
          { both: "1-800-893-447" },
          { both: "1-800-548-539" },
          { both: "1-800-509-586" },
          { both: "1-800-500-440" },
          { both: "1-800-570-318" },
          { both: "1-800-945-489" },
          { both: "1-800-868-297" },
          { both: "1-800-140-218" },
        ],
      },
      {
        id: "date",
        future: true,
        display: "Deadline: ",
      },
    ],
  },
  "auto": {
    id: "auto",
    display: "AUTO INSURANCE",
    lines: [
      {
        id: "name",
        display: "",
        values: [],
      },
      {
        id: "reward",
        display: "Savings: ",
        values: [
          { term: "$99", form: "$99.00" },
          { term: "$126", form: "$126.00" },
          { term: "$271", form: "$271.00" },
          { term: "$304", form: "$304.00" },
          { term: "$336", form: "$336.00" },
          { term: "$490", form: "$490.00" },
          { term: "$514", form: "$514.00" },
        ],
      },
      {
        id: "phone",
        display: "Call: ",
        values: [
          { both: "1-800-921-831" },
          { both: "1-800-195-350" },
          { both: "1-800-311-572" },
          { both: "1-800-452-231" },
          { both: "1-800-173-364" },
          { both: "1-800-419-164" },
          { both: "1-800-170-106" },
          { both: "1-800-631-473" },
          { both: "1-800-768-942" },
          { both: "1-800-936-813" },
        ],
      },
      {
        id: "date",
        future: true,
        display: "Date: ",
        values: [],
      },
      {
        id: "gift",
        display: "Gift: ",
        values: [
          { both: "gas card" },
          { both: "point card" },
          { both: "gift pack" },
          { both: "stuffed bear" },
          { both: "gift card" },
          { both: "fruit basket" },
          { both: "tall plant" },
        ],
      },
      {
        id: "reward2",
        display: "Gift Value: ",
        values: [
          { both: "$10" },
          { both: "$20" },
          { both: "$25" },
          { both: "$50" },
          { both: "$75" },
          { both: "$99" },
        ],
      },
    ],
  },
  "charity": {
    id: "charity",
    display: "CHARITY DONATION",
    lines: [
      {
        id: "name",
        display: "",
        values: [],
      },
      {
        id: "reward",
        display: "Request: ",
        values: [
          { both: "$10" },
          { both: "$20" },
          { both: "$50" },
          { both: "$75" },
          { both: "$100" },
          { both: "$150" },
          { both: "$200" },
          { both: "$300" },
        ],
      },
      {
        id: "phone",
        display: "Call: ",
        values: [
          { both: "1-800-249-941" },
          { both: "1-800-569-738" },
          { both: "1-800-669-197" },
          { both: "1-800-768-536" },
          { both: "1-800-482-506" },
          { both: "1-800-190-565" },
          { both: "1-800-366-666" },
          { both: "1-800-190-342" },
          { both: "1-800-226-116" },
          { both: "1-800-681-457" },
        ],
      },
    ],
  },
  "resort": {
    id: "resort",
    display: "TIMESHARE",
    lines: [
      {
        id: "name",
        display: "",
        values: [],
      },
      {
        id: "reward",
        display: "Cost: ",
        values: [
          { term: "$1200", form: "$1,200" },
          { term: "$2200", form: "$2,200" },
          { term: "$1800", form: "$1,800" },
          { term: "$2400", form: "$2,400" },
          { term: "$4300", form: "$4,300" },
        ],
      },
      {
        id: "date",
        future: true,
        display: "Date: ",
      },
      {
        id: "phone",
        display: "Call: ",
        values: [
          { both: "1-800-189-622" },
          { both: "1-800-209-177" },
          { both: "1-800-105-862" },
          { both: "1-800-947-836" },
          { both: "1-800-612-449" },
          { both: "1-800-775-455" },
          { both: "1-800-728-879" },
          { both: "1-800-665-858" },
          { both: "1-800-692-895" },
          { both: "1-800-140-209" },
        ],
      },
    ],
  },
  "screws": {
    id: "screws",
    display: "COLLECTION NOTICE",
    lines: [
      {
        id: "name",
        display: "",
        values: [],
      },
      {
        id: "reward",
        display: "Due: ",
        values: [
          { both: "$3,395.12" },
          { both: "$1,286.92" },
          { both: "$7,497.77" },
          { both: "$4,777.65" },
          { both: "$4,106.17" },
          { both: "$4,398.43" },
          { both: "$3,086.67" },
          { both: "$6,845.89" },
          { both: "$3,352.31" },
          { both: "$2,276.13" },
          { both: "$6,376.76" },
          { both: "$1,078.24" },
          { both: "$5,111.61" },
          { both: "$1,570.45" },
          { both: "$6,279.48" },
          { both: "$4,087.84" },
          { both: "$7,497.68" },
          { both: "$1,010.13" },
          { both: "$4,580.40" },
          { both: "$5,322.99" },
        ],
      },
      {
        id: "date",
        future: true,
        display: "Date: ",
        values: [],
      },
      {
        id: "reward2",
        display: "Penalty: ",
        values: [
          { both: "$29.00" },
          { both: "$17.95" },
          { both: "$40.36" },
          { both: "$28.32" },
          { both: "$19.76" },
          { both: "$37.31" },
          { both: "$20.22" },
          { both: "$42.65" },
          { both: "$17.68" },
          { both: "$21.70" },
        ],
      },
    ],
  },
};
