<template>
    <main role="main">
        <div class="container">
            <h1>Input New Billing</h1>
            <form action="/" method="post">
                <div class="form-group">
                    <label for="house_name">House Name</label>
                    <input class="form-control" id="house_name" type="text" placeholder="Eifuku１" />
                </div>
                <div class="form-group">
                    <label for="house_address">House Address</label>
                    <input class="form-control" id="house_address" type="text" placeholder="somewhere" />
                </div>
                <div class="form-group">
                    <label for="username">User Name</label>
                    <input class="form-control" id="username" type="text" placeholder="Tokyo Taro" />
                </div>
                <div class="form-group">
                    <label for="user_type">User Type</label>
                    <select class="form-control" name="user_type" id="user_type">
                        <option value="staff">staff</option>
                        <option value="tenant">tenant</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="user_level">User Level</label>
                    <select class="form-control" name="user_level" id="user_level">
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </main>    
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="scss" scoped>
</style>
