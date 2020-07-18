<template>
  <b-container fluid>
    <!-- breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white">
        <li class="breadcrumb-item"><a href="" @click="$router.push({ name: 'default.dashboard-staff' })" class="text-primary"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
        <!-- <li class="breadcrumb-item active text-white" aria-current="page">Dashboard</li> -->
      </ol>
    </nav>
    <!-- //breadcrumb -->

    <b-row>
      <b-col lg="4">
        <div class="iq-user-board">
          <iq-card class-name="iq-user-profile-block1">
            <template v-slot:body>
              <div class="user-details-block">
                <div class="user-profile text-center">
                  <img
                    src="../../assets/images/user/08.jpg"
                    alt="profile-img"
                    class="avatar-130 img-fluid"
                  />
                </div>
                <div class="text-center mt-3">
                  <h4>
                    <b class="user-name">{{ patient.name | capitalizeEach}}</b>
                  </h4>
                  <p>{{patient.dob | age}} years, India</p>
                </div>
                <ul
                  class="doctoe-sedual d-flex align-items-center justify-content-between p-0 mt-4 mb-0"
                >
                  <li class="text-center">
                    <h6 class="text-primary">Blood Group</h6>
                    <h3 class="text-warning">{{patient.bg}}</h3>
                  </li>
                  <li class="text-center">
                    <h6 class="text-primary">HealthCare ID</h6>
                    <h3 class="text-warning">{{patient.hid}}</h3>
                  </li>
                </ul>
              </div>
            </template>
          </iq-card>
          <iq-card body-class="iq-card-body">
            <!-- <template v-slot:headerTitle>
              <h4 class="card-title">Personal Information</h4>
            </template>-->
            <template v-slot:body>
              <div class="about-info m-0 p-0">
                <div class="row">
                  <div class="col-4 info-header">Weight:</div>
                  <div class="col-8">{{patient.weight}} kg</div>
                  <div class="col-4 info-header">Height:</div>
                  <div class="col-8">{{patient.height}} cm</div>
                  <div class="col-4 info-header">Aadhar ID:</div>
                  <div class="col-8">{{patient.aadharid}}</div>
                  <div class="col-4 info-header">D.O.B:</div>
                  <div class="col-8">{{patient.dob | formatDate}}</div>
                  <div class="col-4 info-header">Sex:</div>
                  <div class="col-8">{{patient.sex | gender}}</div>
                  <div class="col-4 info-header">Phone:</div>
                  <div class="col-8">{{patient.phone}}</div>
                  <div class="col-4 info-header">Email:</div>
                  <div class="col-8">{{patient.email}}</div>
                  <div class="col-4 info-header">Address:</div>
                  <div class="col-8">{{patient.address}}</div>
                  <div class="col-4 info-header">City:</div>
                  <div class="col-8">{{patient.city}}</div>
                </div>
              </div>
            </template>
          </iq-card>
        </div>

        <iq-card body-class="p-0">
          <template v-slot:body>
            <div class="iq-edit-list">
              <tab-nav :pills="true" id="dashboardTab" class="iq-edit-profile d-flex">
                <tab-nav-items class="col-md-6 p-0" :active="true" href="#v-pills-opr" title="OPR" />
                <tab-nav-items class="col-md-6 p-0" :active="false" href="#v-pills-ipr" title=" IPR" />
              </tab-nav>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <b-row>

          <b-col sm="6">
            <iq-card class-name="iq-card-block" iq-card-stretch iq-card-height>
              <template v-slot:headerTitle>
                <h4 class="card-title">Health Curve</h4>
              </template>
              <template v-slot:body>
                <ApexChart
                  element="home-chart-06"
                  :chartOption="darkChart1"
                  v-if="$route.meta.dark"
                />
                <ApexChart element="home-chart-06" :chartOption="chart1" v-else />
              </template>
            </iq-card>
          </b-col>
              <b-col md="6">
                <b-row>
                  <b-col lg="12">
                    <!--- sm=9 --->
                    <tab-content id="v-pills-tabContent" class="mt-0">
                      <tab-content-item
                        :active="true"
                        id="v-pills-opr"
                        aria-labelled-by="v-pills-opr-tab"
                      >
                        <!-- // OPR data here -->
                        <b-row>
                          <b-col md="12" lg="12">
                            <iq-card
                              class-name="iq-card-block iq-card-stretch iq-card-height"
                              body-class="iq-bg-primary rounded"
                            >
                              <template v-slot:body>
                                <div class="d-flex align-items-center justify-content-between">
                                  <div class="rounded-circle iq-card-icon bg-warning">
                                    <i class="ri-user-fill"></i>
                                  </div>
                                  <div class="text-right">
                                    <h4 class="mb-0">
                                      <span class="counter">Previous Consultations</span>
                                    </h4>
                                    <h6
                                      class="d-modal-link"
                                      v-b-modal.modal-3
                                    >View {{records.consultation}} Record</h6>
                                  </div>
                                </div>
                              </template>
                            </iq-card>
                          </b-col>
                          <b-col md="12" lg="12">
                            <iq-card
                              class-name="iq-card-block iq-card-stretch iq-card-height"
                              body-class="iq-bg-primary rounded"
                            >
                              <template v-slot:body>
                                <div class="d-flex align-items-center justify-content-between">
                                  <div class="rounded-circle iq-card-icon bg-warning">
                                    <i class="ri-women-fill"></i>
                                  </div>
                                  <div class="text-right">
                                    <h4 class="mb-0">
                                      <span class="counter">Lab Records</span>
                                    </h4>
                                    <h6
                                      class="d-modal-link"
                                      v-b-modal.modal-3
                                    >View {{records.lab}} Record</h6>
                                  </div>
                                </div>
                              </template>
                            </iq-card>
                          </b-col>
                          <b-col md="12" lg="12">
                            <iq-card
                              class-name="iq-card-block iq-card-stretch iq-card-height"
                              body-class="iq-bg-primary rounded"
                            >
                              <template v-slot:body>
                                <div class="d-flex align-items-center justify-content-between">
                                  <div class="rounded-circle iq-card-icon bg-warning">
                                    <i class="ri-group-fill"></i>
                                  </div>
                                  <div class="text-right">
                                    <h4 class="mb-0">
                                      <span class="counter">Receipts</span>
                                    </h4>
                                    <h6 class="d-modal-link" v-b-modal.modal-3>View {{records.receipt}} Receipt</h6>
                                  </div>
                                </div>
                              </template>
                            </iq-card>
                          </b-col>
                          <b-col md="12" lg="12">
                            <iq-card
                              class-name="iq-card-block iq-card-stretch iq-card-height"
                              body-class="iq-bg-primary rounded"
                            >
                              <template v-slot:body>
                                <div class="d-flex align-items-center justify-content-between">
                                  <div class="rounded-circle iq-card-icon bg-warning">
                                    <i class="ri-hospital-line"></i>
                                  </div>
                                  <div class="text-right">
                                    <h4 class="mb-0">
                                      <span class="counter">Discharge Summary</span>
                                    </h4>
                                    <h6
                                      class="d-modal-link"
                                      v-b-modal.modal-3
                                    >View {{records.summary}} Record</h6>
                                  </div>
                                </div>
                              </template>
                            </iq-card>
                          </b-col>
                        </b-row>
                        <!-- // OPR data ends here -->
                      </tab-content-item>
                      <tab-content-item
                        :active="false"
                        id="v-pills-ipr"
                        aria-labelled-by="v-pills-ipr-tab"
                      >
                        <!-- // IPR data here -->
                        <b-table :items="iprData" head-variant="light"></b-table>
                        <!-- // IPR data ends here -->
                      </tab-content-item>
                    </tab-content>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
      </b-col>
    </b-row>

    <b-modal
      id="modal-3"
      scrollable
      size="lg"
      title="Records"
      ok-title="Print"
      cancel-title="Close"
    >
      <div class="table-responsive">
        <table class="table mb-0 table-borderless">
          <thead>
            <tr>
              <th scope="col">Patient</th>
              <th scope="col">Doctor</th>
              <th scope="col">Date</th>
              <th scope="col">Timing</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody v-for="appointment in appointments" :key="appointment.id">
            <tr>
              <td>{{appointment.patient}}</td>
              <td>{{appointment.doctor}}</td>
              <td>{{appointment.date}}</td>
              <td>{{appointment.timing}}</td>
              <td>{{appointment.contact}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-modal>
  </b-container>
</template>
<script>
import IqCard from '../../components/wellem/cards/iq-card'
import { wellem } from '../../config/pluginInit'
import { constant } from '../../config/constant'

export default {
  name: 'Dashboard',
  components: { IqCard },
  mounted () {
    if (
      constant.authPToken === '' ||
      constant.authPToken === undefined ||
      constant.authPToken === null
    ) {
      this.$router.push({ name: 'patient.sign-in' })
    }
    if (this.$route.params.patient) {
      localStorage.setItem('patientDetails', JSON.stringify(this.$route.params.patient))
      this.patient = this.$route.params.patient
    } else {
      this.patient = JSON.parse(localStorage.getItem('patientDetails'))
    }
    wellem.index()
  },
  data () {
    return {
      patient: {
        name: ''
      },
      records: {
        consultation: 1,
        lab: 1,
        receipt: 1,
        summary: 1
      },
      iprData: [
        {
          Date: '12/01/2020',
          'Admission ID': '234324453',
          'Hospital Name': 'Apolo, Gurgaon',
          Status: 'Discharged'
        },
        {
          Date: '11/01/2020',
          'Admission ID': '234324442',
          'Hospital Name': 'Apolo, Gurgaon',
          Status: 'Discharged'
        },
        {
          Date: '10/01/2020',
          'Admission ID': '234324430',
          'Hospital Name': 'Apolo, Gurgaon',
          Status: 'Discharged'
        },
        {
          Date: '09/01/2020',
          'Admission ID': '234324412',
          'Hospital Name': 'Apolo, Gurgaon',
          Status: 'Discharged'
        }
      ],
      appointments: [
        {
          patient: 'Petey Cruiser',
          doctor: 'Dr.Monty Carlo',
          date: '20/02/2020',
          timing: '8:00 AM',
          contact: '+1-202-555-0146'
        }
      ],
      chart1: {
        series: [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }
        ],
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#089bab'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      }
    }
  }
}
</script>
