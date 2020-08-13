$.ajax({
    url: 'https://api.github.com/repos/syaifulrmdhn/belajargit/contributors',
    type: 'get',
    dataType: 'json',
    success: function (result) {
        $.each(result, function (i, data){
            
        });
    }
});
