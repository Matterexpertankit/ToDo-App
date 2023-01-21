var app=angular.module("todoApp", []);

app.controller("todoController", function($scope) {

    $scope.alltask=[];

    var sounds=[
        "sound1.mp3",
        "sound2.wav",
        "sound3.mp3",
        "sound4.wav",
    ];

    $scope.saveTask=function(){

        if($scope.text.length>0)
        {
            var task={
                text: $scope.text,
                date: $scope.date,
                time: $scope.time,
                status: false
            }

            $scope.alltask.push(task);
            $scope.text="";
            $scope.date="";
            $scope.time="";

            var audio=new Audio(sounds[2]);
            audio.play();

        }

    }

    $scope.deleteTask=function(task)
    {
        $scope.alltask.splice( $scope.alltask.indexOf(task), 1 );
        var audio=new Audio(sounds[1]);
        audio.play();
    }

    $scope.statusChanged=function()
    {
        var audio=new Audio(sounds[3]);
        audio.play();
    }

    

})
