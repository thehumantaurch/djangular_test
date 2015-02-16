from rest_framework import serializers

from .models import Question, Choice, Task

class ChoiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Choice
        fields = ('choice_text', 'id', 'votes')

class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = ('question_text', 'choices', 'id')

class TaskSerializer(serializers.ModelSerializer):

  class Meta:
    model = Task
    fields = ('id', 'task_description', 'status')

