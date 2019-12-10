<template>
  <v-container class="mt-12">
    <v-snackbar
      :color="color"
      v-model="snackbar"
      :top="top"
      :right="right"
      :bottom="bottom"
      :left="left"
      :timeout="5000"
      :multi-line="true"
    >
      <span :class="snackText">{{ text }}</span>
      <v-btn right :color="snackBtn" icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-row>
      <v-col cols="12" class="my-4">
        <v-card color="grey lighten-4" flat height="auto">
          <v-toolbar color="green" dark>
            <v-toolbar-title>File a Malpractice Case</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-card-text>
            <v-layout row wrap>
              <v-flex class="px-5 mt-8" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <input type="file" @change="uploadPhoto" />
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-n3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-progress-circular
                    :rotate="-90"
                    :size="80"
                    :width="8"
                    :value="value"
                    color="indigo"
                  >
                    <span>{{ value }} %</span>
                  </v-progress-circular>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.studentsName"
                    label="Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.department"
                    label="Department"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.faculty"
                    label="Faculty"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.nameOfHOD"
                    label="Name of HOD"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.nameOfDean"
                    label="Name of Dean"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field v-model="report.invigilator" label="Name of Invigilator"></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.course"
                    label="Course"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.level"
                    label="Level"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-select
                    v-model="report.caseType"
                    :items="caseType"
                    label="Level of Malpractice"
                  ></v-select>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    :return-value.sync="report.date1"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="report.date1"
                        label="Date Cought"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="report.date1" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu1 = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu1.save(report.date1)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :return-value.sync="report.date2"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="report.date2"
                        label="Date of Trial"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="report.date2" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu2 = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu2.save(report.date2)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.verdict"
                    label="Vedict"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 my-3" xs12 sm12 md12 lg12 xl12>
                <v-layout justify-center>
                  <v-textarea
                    v-model="report.address"
                    outlined
                    label="Student Address"
                  ></v-textarea>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-select
                    v-model="report.states"
                    :items="states"
                    label="State of Origin"
                  ></v-select>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field v-model="report.lga" label="LGA"></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.town"
                    label="Town"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-select
                    v-model="report.sex"
                    :items="sex"
                    label="Sex"
                  ></v-select>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.phoneNumber"
                    label="Student Phone Number"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-8" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-card-actions>
                    <v-btn @click="cancel" small depressed>
                      <v-icon left color="red">mdi-cancel</v-icon>
                      <span right>Cancel</span>
                    </v-btn>
                    <v-btn :disabled="disable" :loading="loading" @click="save" small depressed>
                      <v-icon left color="indigo darken-4"
                        >mdi-content-save</v-icon
                      >
                      <span right>Save</span>
                    </v-btn>
                  </v-card-actions>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fb, db } from "../../firebaseConfig";
export default {
  data: () => ({
    cases: [],
    menu1: false,
    menu2: false,
    caseType: [
      "Unauthorized communication",
      "Disobaying lawful instruction",
      "Possession of writin material"
    ],
    states: [
      "Abia",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Benue",
      "Borno",
      "Cross River",
      "Delta",
      "Ebonyi",
      "Enugu",
      "Edo",
      "Ekiti",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nasarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara"
    ],
    sex: ["Male", "Female"],
    report: {
      images: [],
      level: null,
      phoneNumber: null,
      sex: null,
      address: null,
      states: null,
      lga: null,
      town: null,
      verdict: null,
      date1: new Date().toISOString().substr(0, 7),
      date2: new Date().toISOString().substr(0, 7),
      caseType: null,
      studentsName: null,
      nameOfDean: null,
      nameOfHOD: null,
      course: null,
      invigilator: null,
      department: null,
      faculty: null
    },
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
    loading: false,
    value: 0,
    snackbar: false,
    text: "",
    color: null,
    snackText: null,
    snackBtn: null,
    top: null,
    right: null,
    bottom: null,
    left: null,
    disable: true
  }),
  firestore() {
    return {
      cases: db.collection("cases")
    };
  },
  methods: {
    cancel() {
      this.report.caseNo = null;
      this.report.ipo = null;
      this.report.court = null;
      this.report.name = null;
      this.report.verdict = null;
      this.report.town = null;
      this.report.address = null;
      this.loading = false;
    },
    uploadPhoto(event) {
      let file = event.target.files[0];
      var storageRef = fb.storage().ref("photos/" + file.name);
      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          const math = (progress * 100) / 100;
          const calc = Math.round(math);
          console.log("Upload is " + calc + "% done");
          this.value = calc;
          if (calc == 100) {
            this.top = true;
            this.right = true;
            this.bottom = false;
            this.left = false;
            this.snackbar = true;
            this.text = "Image Upload Successfull";
            this.color = "white";
            this.snackText = "green--text";
            this.snackBtn = "green";
            this.disable = false;
          }
        },
        error => {
          // console.error(error);
          const errorMessage = error.message;
          this.top = true;
          this.right = true;
          this.bottom = false;
          this.left = false;
          this.snackbar = true;
          this.text = errorMessage;
          this.color = "red darken-4";
          this.snackText = "white--text";
          this.snackBtn = "white";
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(getDownloadURL => {
            this.report.images.push(getDownloadURL);
            console.log("file available at", getDownloadURL);
          });
        }
      );
    },
    save() {
      this.loading = true;
      this.$firestore.cases
        .add(this.report)
        .then(docRef => {
          console.log(docRef);
          this.top = true;
          this.right = true;
          this.bottom = false;
          this.left = false;
          this.snackbar = true;
          this.text = "Case Successfilly Filed";
          this.color = "white";
          this.snackText = "indigo--text";
          this.snackBtn = "indigo";
          this.loading = false;
          this.report.caseNo = null;
          this.report.ipo = null;
          this.report.court = null;
          this.report.name = null;
          this.report.verdict = null;
          this.report.town = null;
          this.report.address = null;
          this.loading = false;
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(error);
          this.top = true;
          this.right = true;
          this.bottom = false;
          this.left = false;
          this.snackbar = true;
          this.text = errorMessage;
          this.color = "red darken-4";
          this.snackText = "white--text";
          this.snackBtn = "white";
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
