<template>
    <main role="main">
    <section class="jumbotron text-center">
        <div class="container">
        <h1>Signup</h1>
        <form action="" method="post">
            <label for="house_name">House Name</label>
            <input class="house_name" id="house_name" type="text" placeholder="100円" />
            <label for="house_address">House Address</label>
            <input class="house_address" id="house_address" type="text" placeholder="100円" />
            <label for="username">User Name</label>
            <input class="username" id="username" type="text" placeholder="100円" />
            <label for="user_type">User Type</label>
            <select name="user_type" id="user_type">
                <option value="staff">staff</option>
                <option value="tenant">tenant</option>
            </select>
            <label for="user_level">User Level</label>
            <select name="user_level" id="user_level">
                <option value=""></option>
                <option value=""></option>
            </select>
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
