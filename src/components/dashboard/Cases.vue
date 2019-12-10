<template>
  <v-container class="cases mt-12">
    <v-row>
      <v-col cols="12" class="my-4">
        <v-card color="grey lighten-4" flat height="auto">
          <v-toolbar dense flat color="green" dark>
            <v-toolbar-title>Crime cases</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-text-field
              label="Search..."
              background-color="green darken-1"
              class="mt-7 mr-n2"
              v-model="search"
              solo
              flat
              dense
            ></v-text-field>
          </v-toolbar>

          <v-card-text>
            <v-layout row wrap>
              <v-flex
                v-for="file in filterCases"
                :key="file.id"
                class="px-4 my-5"
                xs12
                sm6
                md4
                lg3
                xl3
              >
                <v-card class="mx-auto" max-width="344">
                  <div v-for="image in file.images" :key="image.id">
                    <v-img :src="image" height="auto"></v-img>
                  </div>

                  <v-card-title>
                    {{ file.studentsName }}
                  </v-card-title>

                  <v-card-subtitle>
                    {{ file.caseType }}
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                      <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Name of Student</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.studentsName }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Penalized for:</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.caseType }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Course</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.course }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Invigilator in Examination Hall</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.invigilator }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Department</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.department }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Faculty</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.faculty }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Head of Department</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.nameOfHOD }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Dean of Faculty</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.nameOfDean }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Level</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.level }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Date Caught</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.date1 }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Date of Trial</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.date2 }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Sex</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.sex }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Address of Student</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.address }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>State of Origin</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.states }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                        
                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Local Government</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.lga }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Town</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.town }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Verdict</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.verdict }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Students Contact</v-list-item-title>
                            <v-list-item-subtitle
                              >{{ file.phoneNumber }}</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-layout row wrap justify-center>
      <v-flex> </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db } from "../../firebaseConfig";
export default {
  name: "cases",
  data: () => ({
    cases: [],
    search: "",
    show: false
  }),

  firestore() {
    return {
      cases: db.collection("cases").orderBy("studentsName")
    };
  },

  computed: {
    filterCases() {
      return this.cases.filter(studentsName => {
        return studentsName.studentsName.match(this.search.toUpperCase());
      });
    }
  }
};
</script>
