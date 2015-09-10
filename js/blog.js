$(function(){
    Parse.$ = jQuery;

    Parse.initialize("ZMnzRQkMCF7c0YN57snOmEEGhs2EXLp2LxZhUC2g", "ZndjZJvoTNz5WBSuLSqkEVHvIJkSauyB0Bzb9iX6");

    var Blog = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({
        model: Blog
    });

    var blogs = new Blogs();

    var BlogsView =  Parse.View.extend({
        template: Handlebars.compile($('#blogs-tpl').html()),
        render: function(){ 
            var collection = { blog: this.collection.toJSON() };
            this.$el.html(this.template(collection));
        }
    });

    blogs.fetch({
        success: function(blogs) {
            console.log(blogs);

            var blogsView = new BlogsView({ collection: blogs });
            blogsView.render();
            $('.main-container').html(blogsView.el);
        },
        error: function(blogs, error) {
            console.log(error);
        }
    });

    

});