$.ajax({
    url: 'https://api.github.com/repos/syaifulrmdhn/belajargit/contributors',
    type: 'get',
    dataType: 'json',
    success: function (result) {
        $.each(result, function (i, data){
            $('#contributors-list').append(
                `<div class="col-md-3">
                    <div class="card mb-3">
                        <img src="${data.avatar_url}" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">${data.login}</h5>
                        <a href="${data.html_url}" class="btn btn-primary">Know More</a>
                    </div>
                    </div>
                </div>`
            );
        });
    }
});
