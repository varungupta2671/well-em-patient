<template>
  <b-container fluid>
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
                    <b>{{patient.name}}</b>
                  </h4>
                  <p>{{patient.age}} years, India</p>
                </div>
                <ul
                  class="doctoe-sedual d-flex align-items-center justify-content-between p-0 mt-4 mb-0"
                >
                  <li class="text-center">
                    <h6 class="text-primary">Blood Group</h6>
                    <h3 class="text-warning">
                      {{patient.bg}}
                    </h3>
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
            <template v-slot:headerTitle>
              <h4 class="card-title">Personal Information</h4>
            </template>
            <template v-slot:body>
              <div class="about-info m-0 p-0">
                <div class="row">
                  <div class="col-4">Weight:</div>
                  <div class="col-8">{{patient.weight}} kg</div>
                  <div class="col-4">Height:</div>
                  <div class="col-8">{{patient.height}} cm</div>
                  <div class="col-4">Aadhar ID:</div>
                  <div class="col-8">{{patient.aadharid}}</div>
                  <div class="col-4">D.O.B:</div>
                  <div class="col-8">{{patient.dob}}</div>
                  <div class="col-4">Sex:</div>
                  <div class="col-8">{{patient.sex === "m" ? "Male" : "Female"}}</div>
                  <div class="col-4">Phone:</div>
                  <div class="col-8">{{patient.phone}}</div>
                  <div class="col-4">Email:</div>
                  <div class="col-8">{{patient.email}}</div>
                  <div class="col-4">Address:</div>
                  <div class="col-8">{{patient.address}}</div>
                  <div class="col-4">City:</div>
                  <div class="col-8">{{patient.city}}</div>
                </div>
              </div>
            </template>
          </iq-card>
        </div>
      </b-col>
      <b-col lg="8">
        <b-row>
          <b-col sm="12">
            <iq-card body-class="bg-primary rounded pt-2 pb-2 pr-2">
              <template v-slot:body>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="mb-0">Welcome {{patient.name}} !</p>
                  <div class="rounded iq-card-icon bg-white">
                    <img src="../../assets/images/page-img/37.png" class="img-fluid" alt="icon" />
                  </div>
                </div>
              </template>
            </iq-card>
          </b-col>
        </b-row>
        <iq-card body-class="pb-0">
          <template v-slot:body>
            <b-row>
              <b-col md="12">
                <b-row>
                  <b-col lg="12">
                    <iq-card body-class="p-0">
                      <template v-slot:body>
                        <div class="iq-edit-list">
                          <tab-nav :pills="true" id="dashboardTab" class="iq-edit-profile d-flex">
                            <tab-nav-items
                              class="col-md-3 p-0"
                              :active="true"
                              href="#v-pills-opr"
                              title="OPR"
                            />
                            <tab-nav-items
                              class="col-md-3 p-0"
                              :active="false"
                              href="#v-pills-ipr"
                              title=" IPR"
                            />
                          </tab-nav>
                        </div>
                      </template>
                    </iq-card>
                  </b-col>
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
                          <b-col md="12" lg="6">
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
                                    <h2 class="mb-0">
                                      <span class="counter">5600 Records</span>
                                    </h2>
                                    <h5
                                      class="d-modal-link"
                                      v-b-modal.modal-3
                                    >View Previous Consultations</h5>
                                  </div>
                                </div>
                              </template>
                            </iq-card>
                          </b-col>
                          <b-col md="12" lg="6">
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
                                    <h2 class="mb-0">
                                      <span class="counter">3450 Records</span>
                                    </h2>
                                    <h5
                                      class="d-modal-link"
                                      v-b-modal.modal-3
                                    >View Previous Lab Records</h5>
                                  </div>
                                </div>
                              </template>
                            </iq-card>
                          </b-col>
                          <b-col md="12" lg="6">
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
                                    <h2 class="mb-0">
                                      <span class="counter">3500 Receipts</span>
                                    </h2>
                                    <h5 class="d-modal-link" v-b-modal.modal-3>View Receipts</h5>
                                  </div>
                                </div>
                              </template>
                            </iq-card>
                          </b-col>
                          <b-col md="12" lg="6">
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
                                    <h2 class="mb-0">
                                      <span class="counter">4500 Records</span>
                                    </h2>
                                    <h5
                                      class="d-modal-link"
                                      v-b-modal.modal-3
                                    >View Discharge Summary</h5>
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
          </template>
        </iq-card>
        <iq-card body-class="pb-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Bookings</h4>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col md="12">
                <b-row>
                  <b-col lg="12">
                    <!-- // Bookings data here -->
                    <b-row>
                      <b-col md="12" lg="6">
                        <iq-card
                          class-name="iq-card-block iq-card-stretch iq-card-height"
                          body-class="iq-bg-primary rounded"
                        >
                          <template v-slot:body>
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="rounded-circle iq-card-icon bg-white">
                                <i class="ri-user-fill text-primary"></i>
                              </div>
                              <div class="text-right">
                                <h4
                                  @click="$router.push({ name: 'default.add-appointment' })"
                                >Book New Appointment</h4>
                              </div>
                            </div>
                          </template>
                        </iq-card>
                      </b-col>
                      <b-col md="12" lg="6">
                        <iq-card
                          class-name="iq-card-block iq-card-stretch iq-card-height"
                          body-class="iq-bg-primary rounded"
                        >
                          <template v-slot:body>
                            <div class="d-flex align-items-center justify-content-between">
                              <div class="rounded-circle iq-card-icon bg-white">
                                <i class="ri-women-fill text-primary"></i>
                              </div>
                              <div class="text-right">
                                <h4
                                  @click="$router.push({ name: 'default.lab-test-booking' })"
                                >Book New Lab Test</h4>
                              </div>
                            </div>
                          </template>
                        </iq-card>
                      </b-col>
                    </b-row>
                    <!-- // Bookings data ends here -->
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>

    <b-modal
      id="modal-3"
      scrollable
      size="xl"
      title="List"
      ok-title="Save Changes"
      cancel-title="Close"
    >
      <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
        <template v-slot:headerAction>
          <b-dropdown size="lg p-0" variant="link" toggle-class="text-decoration-none" no-caret>
            <template v-slot:button-content>
              <span class="dropdown-toggle p-0" id="dropdownMenuButton5" data-toggle="dropdown">
                <i class="ri-more-fill m-0 text-primary"></i>
              </span>
            </template>
            <b-dropdown-item href="#">
              <i class="ri-printer-fill mr-2"></i>Print
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <i class="ri-file-download-fill mr-2"></i>Download
            </b-dropdown-item>
          </b-dropdown>
        </template>
        <template v-slot:body>
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
        </template>
      </iq-card>
    </b-modal>
  </b-container>
</template>
<script>
import IqCard from '../../components/wellem/cards/iq-card'
import { wellem } from '../../config/pluginInit'
import constant from '../../config/constant'
import AuthServices from './../../services/auth'

export default {
  name: 'Dashboard',
  components: { IqCard },
  mounted () {
    if (constant.authToken === '' || constant.authToken === undefined || constant.authToken === null) {
      this.$router.push({ name: 'auth.sign-in' })
    }
    this.getPatientData()
    wellem.index()
  },
  data () {
    return {
      patient: {},
      iprData: [
        {
          Date: '12/01/2020',
          'Admission ID': '234324453',
          'Hospital Name': 'Apolo, Gurgaon',
          Status: 'Discharged'
        }],
      appointments: [
        {
          patient: 'Petey Cruiser',
          doctor: 'Dr.Monty Carlo',
          date: '20/02/2020',
          timing: '8:00 AM',
          contact: '+1-202-555-0146'
        },
        {
          patient: 'Anna Sthesia',
          doctor: 'Dr.Pete Sariya',
          date: '25/02/2020',
          timing: '8:30 AM',
          contact: '+1-202-555-0164'
        }
      ]
    }
  },
  methods: {
    getPatientData () {
      AuthServices.checkAuth(this)
        .then((result) => {
          // console.log('patientData', result)
          this.patient = result
        })
    }
  }
}
</script>
