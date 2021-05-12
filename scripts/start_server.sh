# echo basename $0
# mkdir -p /usr/src/app
# RUN pip install -r requirements.txt
# gunicorn startup:app -b :5000 --reload
# sudo systemctl start uwsgi
# sudo systemctl start nginx
cd frontend
npm run start 