# server.py
from flask import Flask, request, Response, render_template
# from flask_caching import Cache

# app = Flask(__name__, static_folder="./build/static", template_folder="./build")
app = Flask(__name__)

# Cacheインスタンスの作成
# cache = Cache(app, config={
#     'CACHE_TYPE': 'redis',
#     'CACHE_DEFAULT_TIMEOUT': 60,
#     'CACHE_REDIS_HOST': 'localhost',
#     'CACHE_REDIS_PORT': 6379,
#     'CACHE_REDIS_PASSWORD': 'pass1234',
#     'CACHE_REDIS_DB': '0'
# })


@app.route("/")
def index():
    return render_template("index.html")


# @app.route('/login', methods=['POST', 'GET'])
# def login():
#     error = None
#     if request.method == 'POST':
#         if valid_login(request.form['username'],
#                        request.form['password']):
#             return log_the_user_in(request.form['username'])
#         else:
#             error = 'Invalid username/password'
#     # the code below is executed if the request method
#     # was GET or the credentials were invalid
#     return render_template('login.html', error=error)


DICTIONARY = {}

# @app.route('/<key>')
# @cache.cached(timeout=30)  # 30秒間レスポンスをキャッシュする
# def get_value(key):
#     print(f'get_value({key})')
#     return f'key={key}, value={DICTIONARY[key]}'


# @app.route('/<key>/<value>', methods=['POST'])
# def set_value(key, value):
#     print(f'set_value({key},{value})')
#     DICTIONARY[key] = value
#     cache.delete(f'view//{key}')
#     return 'OK'

todo_list = (
    '1',
    '2',
    '3',
    'todo4',
    'todo5',
)

@app.route('/todo/', methods=['GET'])
def get_todo_list():

    # DICTIONARY['todo'] = todo_list
    return Response(response=todo_list, status=200)

@app.route('/todo/<key>', methods=['GET'])
def get_todo(key):
            
    return Response(response=todo_list[int(key)], status=200)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=5000)