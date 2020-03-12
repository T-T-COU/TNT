<template>
    <main role="main">
    <section class="jumbotron text-center">
        <div class="container">
        <h1>Input New Billing</h1>
        <form action="" method="post">
            <label for="amount">Amount</label>
            <input class="amount" id="amount" type="text" placeholder="100円" />
            <label for="name">Product Name</label>
            <input class="name" id="name" type="text" placeholder="トイレットペーパー" />
            <input type="file" name="resume" />
            <input type="submit" value="Submit">
        </form>
        </div>
    </section>
    </main>
</template>

<script>
export default {
  name: "app-user-item"
};
</script>

<style lang="scss" scoped>
</style>
