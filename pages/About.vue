<template>
  <v-container>
    <div class="text-h3 font-weight-light">About Us</div>
    <v-card class="mt-4" elevation="6">
      <v-app-bar-title class="text-h5 font-weight-medium mx-2 pa-2">Founders</v-app-bar-title>
      <hr/>
      <v-row>
        <v-col v-for="founder in founders" :key="founder.id" cols="6">
          <v-card flat>
            <div class="d-flex justify-center pt-12">
              <v-img
                :src="founder.image"
                max-height="100"
                max-width="200"
              ></v-img>
            </div>
            <div class="text-subtitle-2 text-center"> {{ founder.name }}</div>
            <div class="text-subtitle-1 font-weight-light text-center"> {{ founder.content }}</div>
          </v-card>
        </v-col>
      </v-row>
      <hr/>
      <v-app-bar-title class="text-h5 font-weight-medium mx-2 pa-2">Mentors</v-app-bar-title>
      <hr/>
      <v-row>
        <v-col v-for="mentor in mentors" :key="mentor.id" cols="3">
          <v-card flat>
            <div class="d-flex justify-center pt-12">
              <v-img
                :src="mentor.image"
                max-height="100"
                max-width="200"
              ></v-img>
            </div>
            <div class="text-subtitle-2 text-center"> {{ mentor.name }}</div>
            <div class="text-subtitle-1 font-weight-light text-center"> {{ mentor.content }}</div>
          </v-card>
        </v-col>
      </v-row>
      <hr/>
      <v-app-bar-title class="text-h5 font-weight-medium mx-2 pa-2">Experts</v-app-bar-title>
      <hr/>
      <v-row>
        <v-col>
          <ul>
            <li v-for="n in 11" :key="n">{{ experts[n - 1].name }} {{ n }}</li>
          </ul>
        </v-col>
        <v-col>
          <ul>
            <li v-for="n in 11" :key="n">{{ experts[n + 10].name }} {{ n + 11 }}</li>
          </ul>
        </v-col>
      </v-row>
      <hr/>
      <v-app-bar-title class="text-h5 font-weight-medium mx-2 pa-2">Design and Development Team</v-app-bar-title>
      <hr/>
      <v-row>
        <v-col>
          <ul>
            <li v-for="dev in devTeam" :key="dev.id">{{ dev.name }}</li>
          </ul>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      founders: [
        {
          id: 1,
          name: 'Prof. Atulya Naga',
          content: 'Department of Mathematics and Computer Science,\n' +
            'Faculty of Science, Liverpool Hope University, UK.\n',
          image: '/shinchan.jpg',
        },
        {
          id: 2,
          name: 'Dr. Prashant Singh Rana',
          content: 'Computer Science and Engineering Department,\n' +
            'Thapar University, Patiala, Punjab, India.\n',
          image: '/shinchan.jpg',

        }
      ],
      mentors: [
        {
          id: 1,
          name: 'Prof. S G Deshmukh',
          content: 'Director, ABV-IIITM Gwalior, MP,\n' +
            'India.\n',
          image: '/shinchan.jpg',
        },
        {
          id: 2,
          name: 'Prof. M K Tiwari',
          content: 'Department of Industrial and\n' +
            'Systems Engineering,\n' +
            'IIT, Kharagpur, India.\n',
          image: '/shinchan.jpg',
        },
        {
          id: 3,
          name: 'Prof. Kusum Deep',
          content: 'Department of Mathematics,\n' +
            'IIT Roorkee, India.\n',
          image: '/shinchan.jpg',

        },
        {
          id: 4,
          name: 'Prof. Anupam Shukla',
          content: 'Deptment of ICT\n' +
            'ABV-IIITM Gwalior, MP, India.\n',
          image: '/shinchan.jpg',
        }
      ],
      experts: [
        {
          id: 1,
          name: 'Dr. Jagdish Chand Bansal, SAU, New Delhi.',
        },
        {
          id: 2,
          name: 'Dr. Manoj Thakur, IIT Mandi.',
        },
        {
          id: 3,
          name: 'Prof. Deepak Garg, Bennett University, UP.',
        },
        {
          id: 4,
          name: 'Prof. Maninder Singh, Thapar University, Patiala.',
        },
        {
          id: 5,
          name: 'Prof. Seema Bawa, Thapar University, Patiala.',
        },
        {
          id: 6,
          name: 'Prof. AK Verma, Thapar University, Patiala.',
        },
        {
          id: 7,
          name: 'Prof Inder Veer Chana, Thapar University, Patiala.',
        },
        {
          id: 8,
          name: 'Dr. PK Singh, ABV-IIITM, Gwalior.'
        },
        {
          id: 9,
          name: 'Dr. Mahua Bhattacharya, ABV-IIITM, Gwalior.'
        },
        {
          id: 10,
          name: 'Dr. AK Lal, Thapar University, Patiala.'
        },
        {
          id: 11,
          name: 'Prof. KV Arya, IET, Lucknow.'
        },
        {
          id: 12,
          name: 'Dr. Harish Sharma, RTU Kota, Raj.'
        },
        {
          id: 13,
          name: 'Dr. Mukesh Saraswat, JIIT, Nodia, UP.'
        },
        {
          id: 14,
          name: 'Dr. Lokesh Chouchan, NIT Hamirpur.'
        },
        {
          id: 15,
          name: 'Dr. Vijay Kumar, Thapar University, Patiala.'
        },
        {
          id: 16,
          name: 'Dr. Bhoopendra Pauchori, Manipal University, Jaipur.'
        },
        {
          id: 17,
          name: 'Dr. Harish Garg, Thapar University, Patiala.'
        },
        {
          id: 18,
          name: 'Dr. Anil Kumar, Munjal University. Gurugram.'
        },
        {
          id: 19,
          name: 'Dr. Sandeep Kumar, IIT Mandi.'
        },
        {
          id: 20,
          name: 'Dr. Suneel Yadav, IIIT Allahabad.'
        },
        {
          id: 21,
          name: 'Dr. Rohit Singh, Symbosis, Pune.'

        },
        {
          id: 22,
          name: 'Dr. Nand Kishore Yadav, IIT Indore.'
        }
      ],
      devTeam: [
        {
          id: 1,
          name: 'dummy dummy dummy ',
        },
        {
          id: 2,
          name: 'dummy dummy dummy dummy ',
        },
        {
          id: 3,
          name: 'dummy dummy dummy ',
        },
        {
          id: 4,
          name: 'dummy dummy dummy ',
        },
        {
          id: 5,
          name: 'dummy dummy dummy ',
        },
        {
          id: 6,
          name: 'dummy dummy dummy dummy ',
        },
      ],

    }
  }
}
</script>

<style scoped>

</style>
