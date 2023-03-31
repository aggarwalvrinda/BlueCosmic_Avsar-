import datetime,subprocess,os,pyautogui,string,random,time
import pyttsx3
import speech_recognition as sr
import sounddevice,pywhatkit
from scipy.io.wavfile import write
from tkinter import filedialog
import tkinter as tk
from tkinter import ttk
import pyperclip,cv2,playsound,requests,json 
from ttkthemes import themed_tk as tkth
import tkinter.scrolledtext as scrolledtext
from functools import partial
import tkinter.messagebox as tmsg,sqlite3


class SpeakRecog:

    def __init__(self,scrollable_text):
        self.scrollable_text=scrollable_text
    #database connection
    conn = sqlite3.connect('Avsar.db')
    mycursor=conn.cursor()

    engine=pyttsx3.init('sapi5')
    voices=engine.getProperty('voices')
    engine.setProperty('voice',voices[1].id)
    # print(voices[].id)
    # print(voices)

    """ VOICE RATE"""
    rate = engine.getProperty('rate')               # getting details of current speaking rate
    # print(rate)
    engine.setProperty('rate',mycursor.execute('select rate from speech_rate').fetchone()[0])                 # setting up new voice rate in words per minute

    """VOLUME"""   
    volume = engine.getProperty('volume')           #getting to know current volume level (min=0 and max=1)
    # print(volume)                                 #printing current volume level
    engine.setProperty('volume',(mycursor.execute('select vol from volume').fetchone()[0])/10)               # setting up volume level  between 0 and 1
    conn.commit()
    conn.close()
    scrollable_text=None
    def STS(self,scrollable_text):
        '''This is scrollable text setter '''
        self.scrollable_text=scrollable_text
    def updating_ST(self,data):
        self.scrollable_text.configure(state='normal')
        self.scrollable_text.insert('end',data+'\n')
        self.scrollable_text.configure(state='disabled')
        self.scrollable_text.see('end')
        self.scrollable_text.update()
    def updating_ST_No_newline(self,data):
        self.scrollable_text.configure(state='normal')
        self.scrollable_text.insert('end',data)
        self.scrollable_text.configure(state='disabled')
        self.scrollable_text.see('end')
        self.scrollable_text.update()
    def scrollable_text_clearing(self):
        self.scrollable_text.configure(state='normal')
        self.scrollable_text.delete(1.0,'end')
        self.scrollable_text.configure(state='disabled')
        self.scrollable_text.update()
    def speak(self,audio):
        """It speaks the audio"""
        self.updating_ST(audio)
        self.engine.say(audio)
        # engine.save_to_file('Hello World', 'test.mp3')
        self.engine.runAndWait()
        # engine.stop()

    def nonPrintSpeak(self,audio):
        self.engine.say(audio)
        self.engine.runAndWait()

    def takeCommand(self):
        """It take microphone input from the user and return string"""
        recog=sr.Recognizer()
        # mic=Microphone()
        with sr.Microphone() as source:
            #r.adjust_for_ambient_noise(source)
            self.updating_ST("\nListening...")
            recog.pause_threshold = 1
            # r.energy_threshold = 45.131829621150224
            # print(sr.Microphone.list_microphone_names())
            #print(r.energy_threshold)
            audio=recog.listen(source)
        try:
            self.updating_ST("Recognizing...")
            query= recog.recognize_google(audio)
            self.updating_ST(f"You: {query}\n")
        except Exception as e:
            # print(e)
            self.updating_ST("Say that again please...")
            return 'None'
        return query

class SettingWindow:
    def Apply(self):
        #Database connection
        conn = sqlite3.connect('Avsar.db')
        mycursor=conn.cursor()
        Speech_Rate=self.speech_rate_text_box.get()
        if not (Speech_Rate.isdigit()):
            tmsg.showinfo("Error.",f"Please enter integers.")
            self.setting.focus_force()
        else:
            mycursor.execute('update speech_rate set rate=?',(int(Speech_Rate),))
            value=int((self.volume_slider.get()))
            mycursor.execute('update volume set vol=?',(value,))
            conn.commit()
            conn.close()
            # print(f"{value} type is {type(value)}")
            tmsg.showinfo("Point to be noted.",f"Setting will be applied after reboot of this program.")
            self.setting.destroy()
    def settingWindow(self,root):
        #database connection
        conn = sqlite3.connect('Avsar.db')
        mycursor=conn.cursor()
        self.setting=tk.Toplevel(root)
        canvas=tk.Canvas(self.setting)
        canvas.create_line(0,135,285,135)
        canvas.create_line(0,138,285,138)
        canvas.pack()
        self.setting.title("Settings")
        self.setting.iconbitmap('setting.ico')
        self.setting.geometry("285x180+500+200")
        self.setting.resizable(0,0)
        self.volume=ttk.Label(self.setting,text="Dork's Volume: ",borderwidth=0,font=('"Times New Roman"')).place(x=3,y=17)
        self.volume=ttk.Label(self.setting,text='Speech Rate[WPM]:',borderwidth=0,font=('"Times New Roman"')).place(x=3,y=77)
        self.volume_slider=tk.Scale(self.setting,from_=0,to=10,orient=tk.HORIZONTAL)
        Integer_class=tk.IntVar(self.setting,value=mycursor.execute('select rate from speech_rate').fetchone()[0])
        self.speech_rate_text_box=ttk.Entry(self.setting,textvariable=Integer_class)
        self.volume_slider.place(x=137,y=0)
        self.speech_rate_text_box.place(x=140,y=77)
        self.volume_slider.set((mycursor.execute('select vol from volume').fetchone()[0]))
        conn.commit()
        conn.close()
        self.Apply_Button=ttk.Button(self.setting,text="Apply",command=self.Apply).place(x=200,y=150)
        self.setting.mainloop()
