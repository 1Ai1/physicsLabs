var _isEPub = false;
var _isApp = false;

var __base64Images = [];
__base64Images["/org/opensourcephysics/resources/controls/images/window.gif"]="data:image/gif;base64,R0lGODlhEAAQAIcAAP///8zM/7S02rSz2rO02rOz2rOz2bGx17Cw1a+v1a2t06ys0qqq0KenzaOkyaGgx52cw5qawZqawJqav5mZv5iYvpaWvJOTupOTuZKSuJGRt4+PtY+OtYyMs4yMsomJr4eGrIaGrISEqoCApn19o3p6oHR0mnNzmWZmmTMzZgAAAMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPJbhxNsRBwAAAAAAAAAAhIa0PKcBRIbtAAAygAAAAAAAAAAAhIbdPKPsvKiihNsJBIeYAACCCQUMCOFkPJbhxNsNBwAAAAAAAAAAhIbIPKcBRIcBAAAygAAAAAAAAAAAhIbxPKPsvKiihNslBIesAACCCQUMCOFkBxzTCQUMAAAAAAAAswAyv38AOyYNAAAZQAAygAAygAAAAAAAP38ABIc7ggAyhIcJBAAAP38ygAAAwAAAAAAAAAAAEpgQAAAygAAAAAAABNslBIbLAAAABIl3OyYNAAAABIesBIeNPKezyQUOBIcJAAAyiQUMPKdjAAACAAAUUpgQMsAAMsAAAAAogAAUQAAAAAAAAAAURIc/AAAUcsAAEpgQBIc/PKK8PKLLBNrrMsAAAAAAMsEBMsBSAAAAEpbOMsAAAAAogAAUVBTUFBTUExn2AAAogAACMsAAAAAABIdWPKGQMsBMPKGHxNqCAAAAMsAAEpbQEpgSAAAAkxn2GEAaHMAbwAAAFBTUMslsMslsMsAAMslsMsBSAAACMslsAAAAgAAAgACQQABQwAAohIdAAAAAwAAAwABQwABwQABwQCwAAAAwwAAIjphWDphWAAAEQAAAAABQ8smDAABANtFiBIfbAAACUZJRxBhOdUAEP//AP/MzLTatLSz2tqzs7HZs7Cw19Wvr6zTraqq0s2np6HJpJydx8GamprAmpmZv76YmCH5BAEAACsAIf5QQ29weXJpZ2h0IDIwMDAgYnkgU3VuIE1pY3Jvc3lzdGVtcywgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLg0KSkxGIEdSIFZlciAxLjANCgAALAAAAAAQABAAAAhEAFcIHEiwoMGDBj8pXMjwU8FPeiJKlAiRYMWDFwVmfKjHYkeMHzWG5OgR4caNJQeiVDlypUiLDRuOXDGxZkSEOHMeDAgAOw==";
__base64Images["/org/opensourcephysics/resources/controls/images/close.gif"]="data:image/gif;base64,R0lGODlhEAAQAIcAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAMAANgALAAAAAAQABAAAAh3ALEJFMhqBQAAK1gNXIiNFQArgVixCmQFgMKFVhIybLjCysCCGxdqxKaRFq2FJhsCwEZRoMmT2F4KXBFoZMyXKQXWtIhS5seDF136JIgwKM6cLGl6vAnTJ02SCpHeVEnQJsOCQTMG/djxKsKIEw1uXVjwoFVsAQEAOw==";
__base64Images["/org/opensourcephysics/resources/controls/images/initial.gif"]="data:image/gif;base64,R0lGODlhEAAQAPIAAP///5mZzGZmmTMzZgAAAMDAwAAAAAAAACH5BAEAAAUALAAAAAAQABAAAAMnWLrc/jDKSdm4OGMFwAhgGApMNwhoKgyOqa6Qi7KRS0tmVQB6708JADs=";
