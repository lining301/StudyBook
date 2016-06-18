package com.meizu.yellowpage.synchronize;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.HttpHeaderParser;

import java.util.Map;

public abstract class MyRequest<T> extends Request<T> {
    
    private Response.Listener listener;

    public MyRequest(int method, 
                     String url, 
                     Response.ErrorListener errorListener, Response.Listener listener) {
        super(method, url, errorListener);
        this.listener = listener;
    }

    @Override
    protected Response<T> parseNetworkResponse(NetworkResponse networkResponse) {
        T result = doParseResponse(networkResponse);
        
        if (result != null) {
            Response<T> response = Response.success(result, HttpHeaderParser.parseCacheHeaders(networkResponse));
            return response;
        } else {
            return Response.error(new VolleyError("result null"));
        }
    }

    @Override
    protected void deliverResponse(T response) {
        listener.onResponse(response);
    }

    @Override
    protected Map<String, String> getParams() throws AuthFailureError {
        return getCustomParams();
    }

    public abstract T doParseResponse(NetworkResponse response);
    public abstract Map<String, String> getCustomParams();
}