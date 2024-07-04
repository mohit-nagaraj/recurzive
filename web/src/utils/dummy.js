const data = {
  banks: [
    {
      name: "SBI",
      image:
        "https://i.pinimg.com/736x/2a/2c/1d/2a2c1d90075390b22e7e6060254dab0d.jpg",
      score_ranges: {
        10: {
          loan_amount: {
            lower_bound: 9000,
            upper_bound: 45000,
          },
          interest_rate: {
            lower_bound: 13,
            upper_bound: 18,
          },
        },
        20: {
          loan_amount: {
            lower_bound: 18000,
            upper_bound: 60000,
          },
          interest_rate: {
            lower_bound: 12,
            upper_bound: 17,
          },
        },
        30: {
          loan_amount: {
            lower_bound: 25000,
            upper_bound: 75000,
          },
          interest_rate: {
            lower_bound: 11,
            upper_bound: 16,
          },
        },
        40: {
          loan_amount: {
            lower_bound: 30000,
            upper_bound: 80000,
          },
          interest_rate: {
            lower_bound: 10,
            upper_bound: 15,
          },
        },
        50: {
          loan_amount: {
            lower_bound: 35000,
            upper_bound: 85000,
          },
          interest_rate: {
            lower_bound: 9,
            upper_bound: 14,
          },
        },
        60: {
          loan_amount: {
            lower_bound: 40000,
            upper_bound: 90000,
          },
          interest_rate: {
            lower_bound: 8,
            upper_bound: 13,
          },
        },
        70: {
          loan_amount: {
            lower_bound: 45000,
            upper_bound: 95000,
          },
          interest_rate: {
            lower_bound: 7,
            upper_bound: 12,
          },
        },
        80: {
          loan_amount: {
            lower_bound: 50000,
            upper_bound: 100000,
          },
          interest_rate: {
            lower_bound: 6,
            upper_bound: 11,
          },
        },
        90: {
          loan_amount: {
            lower_bound: 55000,
            upper_bound: 105000,
          },
          interest_rate: {
            lower_bound: 5,
            upper_bound: 10,
          },
        },
        100: {
          loan_amount: {
            lower_bound: 60000,
            upper_bound: 110000,
          },
          interest_rate: {
            lower_bound: 4,
            upper_bound: 9,
          },
        },
      },
    },
    {
      name: "Axis Bank",
      image:
        "https://www.jobsgyan.in/wp-content/uploads/2021/05/Axis-Bank-PNG-Logo-.png",
      score_ranges: {
        10: {
          loan_amount: {
            lower_bound: 11000,
            upper_bound: 52000,
          },
          interest_rate: {
            lower_bound: 14,
            upper_bound: 19,
          },
        },
        20: {
          loan_amount: {
            lower_bound: 22000,
            upper_bound: 75000,
          },
          interest_rate: {
            lower_bound: 13,
            upper_bound: 18,
          },
        },
        30: {
          loan_amount: {
            lower_bound: 30000,
            upper_bound: 80000,
          },
          interest_rate: {
            lower_bound: 12,
            upper_bound: 17,
          },
        },
        40: {
          loan_amount: {
            lower_bound: 35000,
            upper_bound: 85000,
          },
          interest_rate: {
            lower_bound: 11,
            upper_bound: 16,
          },
        },
        50: {
          loan_amount: {
            lower_bound: 40000,
            upper_bound: 90000,
          },
          interest_rate: {
            lower_bound: 10,
            upper_bound: 15,
          },
        },
        60: {
          loan_amount: {
            lower_bound: 45000,
            upper_bound: 95000,
          },
          interest_rate: {
            lower_bound: 9,
            upper_bound: 14,
          },
        },
        70: {
          loan_amount: {
            lower_bound: 50000,
            upper_bound: 100000,
          },
          interest_rate: {
            lower_bound: 8,
            upper_bound: 13,
          },
        },
        80: {
          loan_amount: {
            lower_bound: 55000,
            upper_bound: 105000,
          },
          interest_rate: {
            lower_bound: 7,
            upper_bound: 12,
          },
        },
        90: {
          loan_amount: {
            lower_bound: 60000,
            upper_bound: 110000,
          },
          interest_rate: {
            lower_bound: 6,
            upper_bound: 11,
          },
        },
        100: {
          loan_amount: {
            lower_bound: 65000,
            upper_bound: 115000,
          },
          interest_rate: {
            lower_bound: 5,
            upper_bound: 10,
          },
        },
      },
    },
    {
      name: "ICICI Bank",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8mXBusladp4eop5YLbiGOpipboZcpsGylw&s",
      score_ranges: {
        10: {
          loan_amount: {
            lower_bound: 10000,
            upper_bound: 50000,
          },
          interest_rate: {
            lower_bound: 15,
            upper_bound: 20,
          },
        },
        20: {
          loan_amount: {
            lower_bound: 20000,
            upper_bound: 70000,
          },
          interest_rate: {
            lower_bound: 14,
            upper_bound: 19,
          },
        },
        30: {
          loan_amount: {
            lower_bound: 30000,
            upper_bound: 80000,
          },
          interest_rate: {
            lower_bound: 13,
            upper_bound: 18,
          },
        },
        40: {
          loan_amount: {
            lower_bound: 40000,
            upper_bound: 90000,
          },
          interest_rate: {
            lower_bound: 12,
            upper_bound: 17,
          },
        },
        50: {
          loan_amount: {
            lower_bound: 50000,
            upper_bound: 100000,
          },
          interest_rate: {
            lower_bound: 11,
            upper_bound: 16,
          },
        },
        60: {
          loan_amount: {
            lower_bound: 60000,
            upper_bound: 110000,
          },
          interest_rate: {
            lower_bound: 10,
            upper_bound: 15,
          },
        },
        70: {
          loan_amount: {
            lower_bound: 70000,
            upper_bound: 120000,
          },
          interest_rate: {
            lower_bound: 9,
            upper_bound: 14,
          },
        },
        80: {
          loan_amount: {
            lower_bound: 80000,
            upper_bound: 130000,
          },
          interest_rate: {
            lower_bound: 8,
            upper_bound: 13,
          },
        },
        90: {
          loan_amount: {
            lower_bound: 90000,
            upper_bound: 140000,
          },
          interest_rate: {
            lower_bound: 7,
            upper_bound: 12,
          },
        },
        100: {
          loan_amount: {
            lower_bound: 100000,
            upper_bound: 150000,
          },
          interest_rate: {
            lower_bound: 6,
            upper_bound: 11,
          },
        },
      },
    },
    {
      name: "HDFC Bank",
      image:
        "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-emblem.png",
      score_ranges: {
        10: {
          loan_amount: {
            lower_bound: 12000,
            upper_bound: 55000,
          },
          interest_rate: {
            lower_bound: 16,
            upper_bound: 21,
          },
        },
        20: {
          loan_amount: {
            lower_bound: 25000,
            upper_bound: 80000,
          },
          interest_rate: {
            lower_bound: 15,
            upper_bound: 20,
          },
        },
        30: {
          loan_amount: {
            lower_bound: 35000,
            upper_bound: 90000,
          },
          interest_rate: {
            lower_bound: 14,
            upper_bound: 19,
          },
        },
        40: {
          loan_amount: {
            lower_bound: 45000,
            upper_bound: 100000,
          },
          interest_rate: {
            lower_bound: 13,
            upper_bound: 18,
          },
        },
        50: {
          loan_amount: {
            lower_bound: 55000,
            upper_bound: 110000,
          },
          interest_rate: {
            lower_bound: 12,
            upper_bound: 17,
          },
        },
        60: {
          loan_amount: {
            lower_bound: 65000,
            upper_bound: 120000,
          },
          interest_rate: {
            lower_bound: 11,
            upper_bound: 16,
          },
        },
        70: {
          loan_amount: {
            lower_bound: 75000,
            upper_bound: 130000,
          },
          interest_rate: {
            lower_bound: 10,
            upper_bound: 15,
          },
        },
        80: {
          loan_amount: {
            lower_bound: 85000,
            upper_bound: 140000,
          },
          interest_rate: {
            lower_bound: 9,
            upper_bound: 14,
          },
        },
        90: {
          loan_amount: {
            lower_bound: 95000,
            upper_bound: 150000,
          },
          interest_rate: {
            lower_bound: 8,
            upper_bound: 13,
          },
        },
        100: {
          loan_amount: {
            lower_bound: 105000,
            upper_bound: 160000,
          },
          interest_rate: {
            lower_bound: 7,
            upper_bound: 12,
          },
        },
      },
    },
  ],
};
