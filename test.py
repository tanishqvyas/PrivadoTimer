from selenium import webdriver
import time
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys  

# altering options for headless testing
options = Options()
options.headless = True

# Opening the page
browser = webdriver.Chrome(chrome_options=options)
path_to_page = "file:///home/tanishq/MAVIS/Privado%20Tasks/Timer/index.html"
browser.get(path_to_page)  

# Clicking on the button
button = browser.find_element_by_id("mybutton")

# Testing
print("Clicking start button and waiting for 5 secs to pause it")
time.sleep(1)
button.click()
time.sleep(5)

print("Clicking PAUSE button and waiting for 5 secs to start again")
button.click()
time.sleep(5)

print("Restarting the timer and waiting till it reaches to 5 mins to click RESET")
button.click()
time.sleep(295)


print("Clicking RESET")
time.sleep(5)
button.click()
print("Waiting 5 sec before closing the browser")
time.sleep(5)

browser.close()

print("TESTING SUCCESSFUL !!!")