<template>
  <v-container fluid class="home">
    <v-layout class="mt-n3" row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-img
          src="../../assets/bg3.jpg"
          gradient="rgba(0,0,0,0.1), rgba(0,0,0,0.3)"
          height="100vh"
          width="100vw"
        >
          <v-layout class="texts" justify-center row wrap>
            <h1 class="display-2 white--text font-weight-light">Mappi</h1>
          </v-layout>
          <v-layout class="texts2" justify-center row wrap>
            <p class="body-2 white--text font-weight-light">
              There are no short cuts. You gotta study
            </p>
          </v-layout>
          <v-layout class="form-btn" justify-center>
            <Form />
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Form from "./Form";
export default {
  components: {
    Form
  }
};
</script>

<style lang="scss" scoped>
.home {
  .texts {
    @media (max-width: 768px) {
      margin-top: 30%;
    }

    @media (min-width: 768px) {
      margin-top: 20%;
      p {
        word-spacing: 0.2em !important;
        letter-spacing: 0.2em !important;
      }
    }
  }

  .texts2 {
    @media (max-width: 768px) {
      margin-top: 2%;
    }

    @media (min-width: 768px) {
      margin-top: 1.2%;
      h1 {
        font-size: 4em !important;
        letter-spacing: 0.2em !important;
      }
    }
  }

  .form-btn {
    text-align: center;
  }
}
</style>
