<template>
    <main role="main">
        <div class="container">
            <h1>Input New Billing</h1>
            <form action="/" method="post">
                <div class="form-group">
                    <label for="name">Product Name</label>
                    <input class="form-control" id="name" type="text" placeholder="トイレットペーパー" />
                </div>
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <input class="form-control" id="amount" type="text" placeholder="100円" />
                </div>
                <div class="form-group">
                    <label for="house_name">House Name</label>
                    <select class="form-control" name="" id="house_name">
                        <option value="">Eifuku 1</option>
                        <option value="">Eifuku 2</option>
                        <option value="">Eifuku 3</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="file" class="form-control-file border" name="resume">
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
