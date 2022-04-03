$(document).ready(function() {
	//message
	var message = {
		online: '<span class="pull-right label label-success">OPERATIONAL</span>',
		offline: '<span class="pull-right label label-danger">OFFLINE</span>',
		success: '<span class="current-status-page">All Systems Operational</span>',
		warning: '<span class="current-status-page">Systems partially available</span>',
		danger: '<span class="current-status-page">OFFLINE</span>',
	}

	//URL and name
	var urls = [
	{
		name: 'Website',
		url: 'https://xiaozhu2007.github.io'
	},
	{
		name: 'Blog',
		url: 'https://xiaozhu2007.gitlab.io/'
	},
	{
		name: 'GitHost',
		url: 'https://github.com/xiaozhu2007/GitHosts/'
	}
	];
	$(urls).each(function(index,item){
		$('#status .current-status').append('<li class="'+'current-status-'+item.name+'">'+item.name+'</li>')
	});

	refreshTimestamp = function(){
		var stamp = new Date();
		$(".timestamp").html(stamp.toUTCString());
	}

	refreshStatus = function(success){
		if (success == urls.length) {
			$('.status-page').removeClass('alert-danger');
			$('.status-page').removeClass('alert-warning');
			$('.status-page').addClass('alert-success');
			$('.current-status-page').remove();
			$('.status-page').prepend(message.success);
		}
		else if (success == 0) {
			$('.status-page').removeClass('alert-success');
			$('.status-page').removeClass('alert-warning');
			$('.status-page').addClass('alert-danger');
			$('.current-status-page').remove();
			$('.status-page').prepend(message.danger);
		}
		else {
			$('.status-page').removeClass('alert-success');
			$('.status-page').removeClass('alert-danger');
			$('.status-page').addClass('alert-warning');
			$('.current-status-page').remove();
			$('.status-page').prepend(message.warning);
		}
	}

	checkStatus = function() {
		var success = 0;

		$('.status-page').removeClass('alert-danger');
		$('.status-page').removeClass('alert-warning');
		$('.status-page').removeClass('alert-success');
    
		$(urls).each(function(index,item){
			$('.current-status-'+item.name+' .label').remove();
			var ping = $.get(item.url, function(response){
				console.log('URL:' + item.url + '\n Res:' + response);
			})
			.done(function(response){
				$('.current-status-'+item.name).append(message.online);
				success += 1;
			})
			.fail(function(response){
				$('.current-status-'+item.name).append(message.offline);
			})
			.always(function(response){
				refreshStatus(success);
			});
		});
		refreshTimestamp();
	}

	checkStatus();
});
