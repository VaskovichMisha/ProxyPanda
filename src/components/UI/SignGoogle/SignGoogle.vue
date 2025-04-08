<template>
  <button class="sign-google">
    <img src="@/assets/svg/google_logo.svg" alt="">
    <span>Sign up with Google</span>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sign-google {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: fit-content;
  height: 48px;
  background: #FFFFFF;
  padding: 8px 16px 8px 8px;
  backdrop-filter: blur(12px);
  border-radius: 100px;
  color: #4A595F;
  font-weight: 500;
  font-size: 18px;
}

@media (max-width: 1440px) {
  .sign-google {
    height: 44px;
    padding: 7px 14px 7px 7px;
    font-size: 16px;

    & > img {
      width: 30px;
    }
  }
}

@media (max-width: 992px) {
  .sign-google {
    height: 40px;
    padding: 6px 12px 6px 6px;
    font-size: 14px;

    & > img {
      width: 28px;
    }
  }
}
</style>