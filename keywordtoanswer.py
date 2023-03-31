import csv
from ttkthemes import themed_tk
from tkinter import ttk
import tkinter as tk
from tkinter import scrolledtext
from PIL import ImageTk,Image
from rake_nltk import Rake
from random import randint
import os
import time
import playsound
import sys
import pyttsx3
from flask import Flask,render_template
import Annex
from functools import partial
import urllib.request,bs4 as bs,sys,threading

import speech_recognition as sr
from gtts import gTTS

def there_exists(terms,query):
    for term in terms:
        if term in query:
            return True

def mainframe():
    engine=pyttsx3.init()
    #engine.say("Good Afternoon")
    SR.speak("Good Afternoon")
    SR.speak("What is your name")
    #SR.runAndWait()
    def talk(text):
        SR.speak(text)
        #SR.runAndWait()
    sys.getrecursionlimit() # Prints 1000
    SR.takeCommand()
    def speak(text):
        tts=gTTS(text=all, lang="en",tld="com")
        filename="onlymp3.to - One of the Greatest Speeches Ever  Steve Jobs-Tuw8hxrFBH8-192k-1659983637536"
        tts.save(filename)
        playsound.playsound(filename)

    def get_audio():
        r=sr.Recognizer()
        with sr.Microphone() as source:
            audio = r.listen(source)
            said = ""
            try:
                said = r.recognize_google(audio)
                SR.takeCommand()
            except Exception as e:
                print("Exception: " + str(e))
        return said

    text = get_audio()
#if "hello" in text:
 #   speak("hello how are you")

    SR.speak("Tell me something about yourself")
    #SR.runAndWait()


    SR.takeCommand()
    text=get_audio()

    r = Rake()
    file = open('dataset.csv')
    csvreader = csv.reader(file)
    header = []
    header = next(csvreader)
    print(header)
    rows = []
    for row in csvreader:
         rows.append(row)

    print(rows)


    SR.takeCommand()
    text=get_audio()

    for qno in range(0,3):
        index = randint(0,29)
        question =rows[index][0]
        SR.speak(question)
        #SR.runAndWait()
        answer = rows[index][1]
        SR.speak("Give answer")
        text = get_audio()
        r=Rake()
        r.extract_keywords_from_text(answer)

        for rating,keyword in r.get_ranked_phrases_with_scores():
            ans = keyword.split()
            for keyword1 in ans:
                if keyword1 not in text:
                    SR.speak("please speak this keyword too",keyword1)
            if rating > 5:
                SR.speak(rating, ans)


    SR.speak("nice to meet you")
    SR.speak("nice to meet you")


def clearScreen():
    ''' clear the scrollable text box'''
    SR.scrollable_text_clearing()

def gen(n):
    for i in range(n):
        yield i

class MainframeThread(threading.Thread):
    def __init__(self, threadID, name):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
    def run(self):
        mainframe()

def Launching_thread():
    Thread_ID=gen(1000)
    global MainframeThread_object
    MainframeThread_object=MainframeThread(Thread_ID.__next__(),"Mainframe")
    MainframeThread_object.start()

if __name__=="__main__":
        #tkinter code
        root=themed_tk.ThemedTk()
        root.set_theme("winnative")
        root.geometry("{}x{}+{}+{}".format(920,360,int(root.winfo_screenwidth()/2 - 920/2),int(root.winfo_screenheight()/2 - 360/2)))
        root.resizable(0,0)
        root.title("Avsar")
        #root.iconbitmap('Dork.ico')
        root.configure(bg='#2c4557')
        scrollable_text=scrolledtext.ScrolledText(root,state='disabled',height=15,width=87,relief='sunken',bd=5,wrap=tk.WORD,bg='#add8e6',fg='#800000')
        scrollable_text.place(x=10,y=10)
        mic_img=Image.open("Mic.png")
        mic_img=mic_img.resize((55,55),Image.ANTIALIAS)
        mic_img=ImageTk.PhotoImage(mic_img)
        Speak_label=tk.Label(root,text="SPEAK:",fg="#FFD700",font='"Times New Roman" 12 ',borderwidth=0,bg='#2c4557')
        Speak_label.place(x=250,y=300)
        """Setting up objects"""
        SR=Annex.SpeakRecog(scrollable_text)    #Speak and Recognition class instance
        Listen_Button=tk.Button(root,image=mic_img,borderwidth=0,activebackground='#2c4557',bg='#2c4557',command=Launching_thread)
        Listen_Button.place(x=330,y=280)
        myMenu=tk.Menu(root)
        m1=tk.Menu(myMenu,tearoff=0) #tearoff=0 means the submenu can't be teared of from the window
        myMenu.add_cascade(label="Help",menu=m1)
        stng_win=Annex.SettingWindow()
        myMenu.add_cascade(label="Settings",command=partial(stng_win.settingWindow,root))
        myMenu.add_cascade(label="Clear Screen",command=clearScreen)
        root.config(menu=myMenu)
        root.mainloop()


